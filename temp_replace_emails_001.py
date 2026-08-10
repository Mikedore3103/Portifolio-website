import pathlib
import re

root = pathlib.Path('.')
pattern = re.compile(r'[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}')
target = 'info@dore.name.ng'
count = 0
files = 0
for path in root.rglob('*'):
    if path.is_file():
        try:
            text = path.read_text(encoding='utf-8')
        except Exception:
            continue
        if pattern.search(text):
            new_text = pattern.sub(target, text)
            if new_text != text:
                path.write_text(new_text, encoding='utf-8')
                files += 1
                count += len(pattern.findall(text))
print(f'Updated {count} email occurrences in {files} files.')
