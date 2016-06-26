
"""init module.

Parses main awesome list to extract child urls to be parsed. Dumps JSON to external text file once done.

Author: Ankit Gyawali (https://github.com/ankitgyawali).
"""
import parse
import urllib.request
import json
import re

# Parent URL
url = "https://raw.githubusercontent.com/sindresorhus/awesome/master/readme.md"

try:
	content = urllib.request.urlopen(url).read().decode("utf-8")
except:
	print ("Failed to Parse Root URL : " +url)

# Main Object that will hold all awesome data
root = {}
root['headers'] = []

# Split by section markdown 
mainHeaders = content.split('##')[2:-1]

# Loop and parse all the sections
for i, mainHeader in enumerate(mainHeaders):
	mainHeaders[i] = mainHeader.splitlines()
	if(mainHeader[i][0]!='License' and mainHeader[i][0]!='Contributors'):
		head = {}
		head['title'] = mainHeaders[i][0]
		head['titleDetails'] = []
		# Generate Name/URL for awesome lists
		for j, headerLinks in enumerate(mainHeaders[i]):
				details = {}
				details['url'] = headerLinks.partition("(")[2].partition(")")[0]
				details['name'] = headerLinks.partition("[")[2].partition("]")[0]
				if(details['url']!='' and ('http' in details['url'])):
					# IMPORTANT: This line does the parsing of all awesome URLS
					#details['details'] = parse.parseUrl(details['url'])
					head['titleDetails'].append(details)
		root['headers'].append(head)


#temp = parse.parseUrl("https://github.com/igorbarinov/awesome-data-engineering")

# print(temp)


with open('awesome.json', 'w') as outfile:
    json.dump(root, outfile)