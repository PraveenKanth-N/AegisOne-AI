import re

def test_latex(code):
    # check matching braces
    stack = []
    lines = code.split('\n')
    for i, line in enumerate(lines):
        for ch in line:
            if ch == '{':
                stack.append(('{', i+1))
            elif ch == '}':
                if not stack:
                    return f"Unmatched closing brace at line {i+1}"
                stack.pop()
    if stack:
        return f"Unclosed brace from line {stack[-1][1]}"
    
    # check begin/end environments
    begins = re.findall(r'\\begin\{([a-zA-Z0-9_\*]+)\}', code)
    ends = re.findall(r'\\end\{([a-zA-Z0-9_\*]+)\}', code)
    if begins != ends:
        return f"Environment mismatch: begins={len(begins)}, ends={len(ends)}"
    
    return "OK"

print("Syntax checker ready.")
