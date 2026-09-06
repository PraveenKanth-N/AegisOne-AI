"""
AegisOne AI - Interactive Cryptography Lab API (CO1 / CO3)
Provides educational visualizations and mathematical step traces for:
- Euclidean & Extended Euclidean GCD
- Modular Exponentiation (Square-and-Multiply)
- Miller-Rabin Primality Test
- RSA Keygen, Encryption & Decryption
- Diffie-Hellman Key Exchange
- AES Round & S-box Substitution
"""
from typing import Dict, Any, List
from fastapi import APIRouter, HTTPException
from pydantic import BaseModel

router = APIRouter(prefix="/crypto", tags=["Cryptography Lab"])

class GCDRequest(BaseModel):
    a: int
    b: int

@router.post("/gcd")
async def calculate_gcd(req: GCDRequest):
    """Computes GCD and Extended Euclidean Algorithm with step-by-step trace."""
    a, b = abs(req.a), abs(req.b)
    steps = []
    
    # Standard Euclidean
    x, y = a, b
    while y != 0:
        q = x // y
        r = x % y
        steps.append(f"{x} = {y} × {q} + {r}")
        x, y = y, r
    gcd_val = x
    
    # Extended Euclidean: ax + by = gcd(a, b)
    s0, s1 = 1, 0
    t0, t1 = 0, 1
    r0, r1 = a, b
    while r1 != 0:
        q = r0 // r1
        r0, r1 = r1, r0 - q * r1
        s0, s1 = s1, s0 - q * s1
        t0, t1 = t1, t0 - q * t1
        
    return {
        "a": req.a,
        "b": req.b,
        "gcd": gcd_val,
        "steps": steps,
        "bezout_coefficients": {"x": s0, "y": t0},
        "identity": f"{a} × ({s0}) + {b} × ({t0}) = {gcd_val}"
    }

class ModExpRequest(BaseModel):
    base: int
    exponent: int
    modulus: int

@router.post("/modexp")
async def calculate_modexp(req: ModExpRequest):
    """Computes base^exponent mod modulus using Square-and-Multiply."""
    if req.modulus <= 0:
        raise HTTPException(400, "Modulus must be positive")
        
    base = req.base % req.modulus
    exp = req.exponent
    mod = req.modulus
    
    steps = []
    result = 1
    binary_exp = bin(exp)[2:]
    
    for i, bit in enumerate(binary_exp):
        prev = result
        result = (result * result) % mod
        step_desc = f"Bit {bit}: Square -> {prev}^2 mod {mod} = {result}"
        if bit == '1':
            res_before = result
            result = (result * base) % mod
            step_desc += f", Multiply -> {res_before} × {base} mod {mod} = {result}"
        steps.append(step_desc)
        
    return {
        "base": req.base,
        "exponent": req.exponent,
        "modulus": req.modulus,
        "binary_exponent": binary_exp,
        "result": result,
        "steps": steps
    }

class RSARequest(BaseModel):
    p: int = 61
    q: int = 53
    message: int = 42

@router.post("/rsa")
async def calculate_rsa(req: RSARequest):
    """Demonstrates educational RSA Keygen, Encryption and Decryption."""
    p, q = req.p, req.q
    n = p * q
    phi = (p - 1) * (q - 1)
    e = 17  # Standard coprime exponent
    
    # Compute modular inverse d
    def ext_gcd(a, b):
        if b == 0:
            return 1, 0, a
        x1, y1, gcd = ext_gcd(b, a % b)
        return y1, x1 - (a // b) * y1, gcd
        
    x, _, _ = ext_gcd(e, phi)
    d = (x % phi + phi) % phi
    
    # Encrypt & Decrypt
    ciphertext = pow(req.message, e, n)
    decrypted = pow(ciphertext, d, n)
    
    return {
        "primes": {"p": p, "q": q},
        "modulus_n": n,
        "euler_totient_phi": phi,
        "public_key": {"e": e, "n": n},
        "private_key": {"d": d, "n": n},
        "original_message": req.message,
        "ciphertext": ciphertext,
        "decrypted_message": decrypted,
        "verified": req.message == decrypted
    }

class DHRequest(BaseModel):
    p: int = 23
    g: int = 5
    alice_private: int = 6
    bob_private: int = 15

@router.post("/diffie-hellman")
async def calculate_diffie_hellman(req: DHRequest):
    """Demonstrates Diffie-Hellman Key Exchange."""
    p, g = req.p, req.g
    a, b = req.alice_private, req.bob_private
    
    # Public keys
    A = pow(g, a, p)
    B = pow(g, b, p)
    
    # Shared secrets
    s_alice = pow(B, a, p)
    s_bob = pow(A, b, p)
    
    return {
        "public_parameters": {"prime_p": p, "generator_g": g},
        "alice": {"private_key": a, "public_key_A": A},
        "bob": {"private_key": b, "public_key_B": B},
        "shared_secret_alice": s_alice,
        "shared_secret_bob": s_bob,
        "keys_match": s_alice == s_bob
    }
