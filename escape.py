import re
re.findall('\n', '\\n\n\\')['\n'] # 找到了换行符
re.findall('\\n', '\\n\n\\')['\n'] # 找到了换行符
re.findall('\\\n', '\\n\n\\')['\n'] # 找到了换行符
re.findall('\\\\n', '\\n\n\\')['\\n'] # 找到了反斜杠和字母n