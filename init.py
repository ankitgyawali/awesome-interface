
# from html.parser import HTMLParser
# import urllib.request
# #url = "https://raw.githubusercontent.com/sindresorhus/awesome/master/readme.md"
# url = "https://raw.githubusercontent.com/weblancaster/awesome-IoT-hybrid/master/README.md"
# with urllib.request.urlopen(url) as url:
#     content = url.read().decode("utf-8")
# mainHeaders = content.split('##')
# print(len(mainHeaders))

# for mainHeader in mainHeaders:
#     mainHeader = mainHeader.split('###')
#     print (len(mainHeader))
# print(len(mainHeaders))

# print(type(content))
# print(content)

import json;
import re

root = {}
root['headers'] = []

with open('readme.md', 'r') as content_file:
    content = content_file.read()

mainHeaders = content.split('##')[2:-1]

for i, mainHeader in enumerate(mainHeaders):
	mainHeaders[i] = mainHeader.splitlines()
	if(mainHeader[i][0]!='License' and mainHeader[i][0]!='Contributors'):
		head = {}
		head['title'] = mainHeaders[i][0]
		head['titleDetails'] = []
		for j, headerLinks in enumerate(mainHeaders[i]):
				details = {}
				details['url'] = headerLinks.partition("(")[2].partition(")")[0]
				details['name'] = headerLinks.partition("[")[2].partition("]")[0]
				if(details['url']!='' and ('http' in details['url'])):
					head['titleDetails'].append(details)
		root['headers'].append(head)

print (root)

