import React, { useState } from 'react';
import { KeyRound, Play, Calculator, Lock, RefreshCw } from 'lucide-react';
import { api } from '../services/api';

export const CryptoLabPage: React.FC = () => {
  const [tab, setTab] = useState<'gcd' | 'rsa' | 'dh'>('gcd');

  // GCD State
  const [gcdA, setGcdA] = useState(252);
  const [gcdB, setGcdB] = useState(105);
  const [gcdResult, setGcdResult] = useState<any | null>(null);

  // RSA State
  const [rsaP, setRsaP] = useState(61);
  const [rsaQ, setRsaQ] = useState(53);
  const [rsaMsg, setRsaMsg] = useState(42);
  const [rsaResult, setRsaResult] = useState<any | null>(null);

  // DH State
  const [dhP, setDhP] = useState(23);
  const [dhG, setDhG] = useState(5);
  const [dhAlice, setDhAlice] = useState(6);
  const [dhBob, setDhBob] = useState(15);
  const [dhResult, setDhResult] = useState<any | null>(null);

  const handleComputeGCD = async () => {
    try {
      const res = await api.calculateGCD(gcdA, gcdB);
      setGcdResult(res);
    } catch (e) {
      console.error(e);
    }
  };

  const handleComputeRSA = async () => {
    try {
      const res = await api.calculateRSA(rsaP, rsaQ, rsaMsg);
      setRsaResult(res);
    } catch (e) {
      console.error(e);
    }
  };

  const handleComputeDH = async () => {
    try {
      const res = await api.calculateDH(dhP, dhG, dhAlice, dhBob);
      setDhResult(res);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="space-y-6 pb-12">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xl font-bold tracking-tight text-white flex items-center space-x-2">
            <KeyRound className="w-5 h-5 text-sky-400" />
            <span>Educational Cryptography Laboratory (CO1 / CO3)</span>
          </h1>
          <p className="text-xs text-slate-400 mt-0.5">
            Interactive mathematical walkthroughs for number theory, modular arithmetic, RSA asymmetric cryptography, and Diffie-Hellman key exchange.
          </p>
        </div>

        {/* Tab Selector */}
        <div className="flex items-center space-x-2 bg-slate-900 border border-slate-800 p-1 rounded-lg text-xs">
          <button
            onClick={() => setTab('gcd')}
            className={`px-3 py-1.5 rounded-md font-semibold transition-colors ${
              tab === 'gcd' ? 'bg-sky-500 text-slate-950 shadow' : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            Euclidean & Extended GCD
          </button>
          <button
            onClick={() => setTab('rsa')}
            className={`px-3 py-1.5 rounded-md font-semibold transition-colors ${
              tab === 'rsa' ? 'bg-sky-500 text-slate-950 shadow' : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            RSA Cryptosystem Trace
          </button>
          <button
            onClick={() => setTab('dh')}
            className={`px-3 py-1.5 rounded-md font-semibold transition-colors ${
              tab === 'dh' ? 'bg-sky-500 text-slate-950 shadow' : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            Diffie-Hellman Key Exchange
          </button>
        </div>
      </div>

      {/* Tab 1: GCD & Extended Euclidean */}
      {tab === 'gcd' && (
        <div className="grid grid-cols-2 gap-6 text-xs">
          <div className="bg-slate-900/80 border border-slate-800 rounded-xl p-5 space-y-4">
            <h2 className="text-sm font-semibold text-white">Input Parameters</h2>
            <div>
              <label className="text-slate-400 block mb-1 font-mono">Integer a:</label>
              <input
                type="number"
                value={gcdA}
                onChange={(e) => setGcdA(Number(e.target.value))}
                className="w-full bg-slate-950 border border-slate-800 rounded-lg p-2.5 text-white font-mono"
              />
            </div>
            <div>
              <label className="text-slate-400 block mb-1 font-mono">Integer b:</label>
              <input
                type="number"
                value={gcdB}
                onChange={(e) => setGcdB(Number(e.target.value))}
                className="w-full bg-slate-950 border border-slate-800 rounded-lg p-2.5 text-white font-mono"
              />
            </div>
            <button
              onClick={handleComputeGCD}
              className="w-full bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold p-2.5 rounded-lg transition-colors"
            >
              Compute Extended GCD
            </button>
          </div>

          <div className="bg-slate-900/80 border border-slate-800 rounded-xl p-5 space-y-3">
            <h2 className="text-sm font-semibold text-white">Step-by-Step Euclidean Trace</h2>
            {gcdResult ? (
              <div className="space-y-3">
                <div className="bg-slate-950 p-3 rounded-lg border border-slate-800 flex items-center justify-between">
                  <span className="text-slate-400">Greatest Common Divisor:</span>
                  <span className="text-lg font-bold font-mono text-emerald-400">gcd({gcdResult.a}, {gcdResult.b}) = {gcdResult.gcd}</span>
                </div>
                <div className="bg-slate-950 p-3 rounded-lg border border-slate-800 space-y-1 font-mono text-[11px] text-slate-300">
                  <span className="text-sky-400 block font-semibold mb-1">Division Steps:</span>
                  {gcdResult.steps.map((step: string, i: number) => (
                    <div key={i}>{step}</div>
                  ))}
                </div>
                <div className="p-3 bg-indigo-500/10 border border-indigo-500/20 rounded-lg font-mono text-[11px] text-indigo-300">
                  <strong>Bézout's Identity:</strong> {gcdResult.identity}
                </div>
              </div>
            ) : (
              <p className="text-slate-400 italic">Click compute to visualize the division steps and Bézout coefficients.</p>
            )}
          </div>
        </div>
      )}

      {/* Tab 2: RSA */}
      {tab === 'rsa' && (
        <div className="grid grid-cols-2 gap-6 text-xs">
          <div className="bg-slate-900/80 border border-slate-800 rounded-xl p-5 space-y-4">
            <h2 className="text-sm font-semibold text-white">RSA Prime Parameters</h2>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="text-slate-400 block mb-1 font-mono">Prime p:</label>
                <input
                  type="number"
                  value={rsaP}
                  onChange={(e) => setRsaP(Number(e.target.value))}
                  className="w-full bg-slate-950 border border-slate-800 rounded-lg p-2 text-white font-mono"
                />
              </div>
              <div>
                <label className="text-slate-400 block mb-1 font-mono">Prime q:</label>
                <input
                  type="number"
                  value={rsaQ}
                  onChange={(e) => setRsaQ(Number(e.target.value))}
                  className="w-full bg-slate-950 border border-slate-800 rounded-lg p-2 text-white font-mono"
                />
              </div>
            </div>
            <div>
              <label className="text-slate-400 block mb-1 font-mono">Plaintext Integer (m &lt; n):</label>
              <input
                type="number"
                value={rsaMsg}
                onChange={(e) => setRsaMsg(Number(e.target.value))}
                className="w-full bg-slate-950 border border-slate-800 rounded-lg p-2 text-white font-mono"
              />
            </div>
            <button
              onClick={handleComputeRSA}
              className="w-full bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold p-2.5 rounded-lg transition-colors"
            >
              Generate Keys, Encrypt & Decrypt
            </button>
          </div>

          <div className="bg-slate-900/80 border border-slate-800 rounded-xl p-5 space-y-3">
            <h2 className="text-sm font-semibold text-white">RSA Mathematical Breakdown</h2>
            {rsaResult ? (
              <div className="space-y-2.5 font-mono text-[11px]">
                <div className="bg-slate-950 p-2.5 rounded border border-slate-800">
                  <span className="text-slate-400 block">Modulus n:</span>
                  <span className="text-white font-bold">{rsaResult.primes.p} × {rsaResult.primes.q} = {rsaResult.modulus_n}</span>
                </div>
                <div className="bg-slate-950 p-2.5 rounded border border-slate-800">
                  <span className="text-slate-400 block">Euler's Totient φ(n):</span>
                  <span className="text-white font-bold">({rsaResult.primes.p}-1)({rsaResult.primes.q}-1) = {rsaResult.euler_totient_phi}</span>
                </div>
                <div className="bg-slate-950 p-2.5 rounded border border-slate-800 flex justify-between">
                  <div><span className="text-slate-400">Public Key (e, n):</span> ({rsaResult.public_key.e}, {rsaResult.public_key.n})</div>
                  <div><span className="text-slate-400">Private Key (d, n):</span> ({rsaResult.private_key.d}, {rsaResult.private_key.n})</div>
                </div>
                <div className="bg-slate-950 p-2.5 rounded border border-slate-800">
                  <span className="text-slate-400 block">Ciphertext c = m^e mod n:</span>
                  <span className="text-rose-400 font-bold">{rsaResult.ciphertext}</span>
                </div>
                <div className="bg-emerald-950/40 p-2.5 rounded border border-emerald-500/30 text-emerald-300">
                  <strong>Decrypted Message m = c^d mod n:</strong> {rsaResult.decrypted_message} (Verification: {rsaResult.verified ? 'MATCH ✓' : 'FAIL'})
                </div>
              </div>
            ) : (
              <p className="text-slate-400 italic">Configure primes p and q and click generate to observe key generation.</p>
            )}
          </div>
        </div>
      )}

      {/* Tab 3: Diffie-Hellman */}
      {tab === 'dh' && (
        <div className="grid grid-cols-2 gap-6 text-xs">
          <div className="bg-slate-900/80 border border-slate-800 rounded-xl p-5 space-y-4">
            <h2 className="text-sm font-semibold text-white">Public & Private Parameters</h2>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="text-slate-400 block mb-1 font-mono">Prime p:</label>
                <input
                  type="number"
                  value={dhP}
                  onChange={(e) => setDhP(Number(e.target.value))}
                  className="w-full bg-slate-950 border border-slate-800 rounded-lg p-2 text-white font-mono"
                />
              </div>
              <div>
                <label className="text-slate-400 block mb-1 font-mono">Generator g:</label>
                <input
                  type="number"
                  value={dhG}
                  onChange={(e) => setDhG(Number(e.target.value))}
                  className="w-full bg-slate-950 border border-slate-800 rounded-lg p-2 text-white font-mono"
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="text-slate-400 block mb-1 font-mono">Alice Private a:</label>
                <input
                  type="number"
                  value={dhAlice}
                  onChange={(e) => setDhAlice(Number(e.target.value))}
                  className="w-full bg-slate-950 border border-slate-800 rounded-lg p-2 text-white font-mono"
                />
              </div>
              <div>
                <label className="text-slate-400 block mb-1 font-mono">Bob Private b:</label>
                <input
                  type="number"
                  value={dhBob}
                  onChange={(e) => setDhBob(Number(e.target.value))}
                  className="w-full bg-slate-950 border border-slate-800 rounded-lg p-2 text-white font-mono"
                />
              </div>
            </div>
            <button
              onClick={handleComputeDH}
              className="w-full bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold p-2.5 rounded-lg transition-colors"
            >
              Simulate Key Exchange
            </button>
          </div>

          <div className="bg-slate-900/80 border border-slate-800 rounded-xl p-5 space-y-3">
            <h2 className="text-sm font-semibold text-white">Key Exchange Verification</h2>
            {dhResult ? (
              <div className="space-y-3 font-mono text-[11px]">
                <div className="bg-slate-950 p-2.5 rounded border border-slate-800">
                  <span className="text-slate-400">Alice Public Key A = g^a mod p:</span>
                  <div className="text-white font-bold">{dhResult.public_parameters.generator_g}^{dhResult.alice.private_key} mod {dhResult.public_parameters.prime_p} = {dhResult.alice.public_key_A}</div>
                </div>
                <div className="bg-slate-950 p-2.5 rounded border border-slate-800">
                  <span className="text-slate-400">Bob Public Key B = g^b mod p:</span>
                  <div className="text-white font-bold">{dhResult.public_parameters.generator_g}^{dhResult.bob.private_key} mod {dhResult.public_parameters.prime_p} = {dhResult.bob.public_key_B}</div>
                </div>
                <div className="p-3 bg-emerald-950/40 border border-emerald-500/30 rounded-lg text-emerald-300">
                  <div className="font-bold">Computed Shared Secret s:</div>
                  <div>Alice calculates B^a mod p = <strong>{dhResult.shared_secret_alice}</strong></div>
                  <div>Bob calculates A^b mod p = <strong>{dhResult.shared_secret_bob}</strong></div>
                  <div className="mt-1 text-[10px] text-emerald-400">Shared Secrets Match: {dhResult.keys_match ? 'CONFIRMED ✓' : 'MISMATCH'}</div>
                </div>
              </div>
            ) : (
              <p className="text-slate-400 italic">Click simulate to calculate public keys and compute the shared symmetric secret.</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
