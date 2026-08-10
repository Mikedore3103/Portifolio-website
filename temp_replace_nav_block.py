import pathlib
import re

root = pathlib.Path('.')
source_path = root / 'index.html'
text = source_path.read_text(encoding='utf-8')
pattern = re.compile(r'<!-- Main Navigation Start -->.*?<!-- Main Navigation End -->', re.DOTALL)
match = pattern.search(text)
if not match:
    raise SystemExit('Could not find navigation block in index.html')
navigation_block = match.group(0)
updated_files = []
for path in root.glob('*.html'):
    if path.name == 'index.html':
        continue
    content = path.read_text(encoding='utf-8')
    if pattern.search(content):
        new_content = pattern.sub(navigation_block, content)
        if new_content != content:
            path.write_text(new_content, encoding='utf-8')
            updated_files.append(path.name)
print('Updated files:', ', '.join(updated_files))
