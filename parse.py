"""awesome list parser module.
This module takes repository url of "awesome list" on github and parses it to return a JSON object. 
Author: Ankit Gyawali (https://github.com/ankitgyawali).
"""
import urllib.request
import json;
import re


def parseUrl(url):
	# Modify URL to fetch raw data.
	# TODO: Some URLs use 'readme.md' instead of 'README.md'. Try catch to use appropriate one.
	url = url.replace("github", "raw.githubusercontent")+"/master/README.md"

	# Awesome Object to return
	awesome = {}
	# Subheaders inside awesome list 
	awesome['title'] =[]

	# Check for 404, return if 404
	try:
		subcontent = urllib.request.urlopen(url).read().decode("utf-8")
		print ("Parsed: " +url)
	except:
		print ("Failed: " +url)
		return

	# Split by mainheader markdown "##"
	mainHeaders = subcontent.split('\n## ')[1:-1]

	# Split by subheader markdown "###" or "####"
	for i, mainHeader in enumerate(mainHeaders): 
		mainHeaders[i] = re.split('\n### |\n#### ',mainHeaders[i])

		# Always parse first section of header
		mainHeaders[i][0] = mainHeaders[i][0].splitlines()
		section = {}
		section['name'] = mainHeaders[i][0][0]
		section['links'] = []
		section['subheaders'] = []
		# Begin parsing first section of header
		for j, sectionLinks in enumerate(mainHeaders[i][0]): 
			sectionDetails = {}
			sectionDetails['url'] = sectionLinks.partition("(")[2].partition(")")[0]
			sectionDetails['name'] = sectionLinks.partition("[")[2].partition("]")[0]
			if(sectionDetails['url'].strip()!='' and ('http' in sectionDetails['url'])):
				section['links'].append(sectionDetails)
			# TODO: Debug
			# else:
			# 	if(sectionDetails['url'].strip()!='' and sectionDetails['url'][1]=="#"):
			# 		print (sectionDetails['url'])
		
		
		mainHeaders[i].pop(0)
		# If header has subheaders parse all of them
		if (len(mainHeaders[i]) !=0): 
			# Loop through subsection Heading
			for k, subHeaders in enumerate(mainHeaders[i]): 
				mainHeaders[i][k] = mainHeaders[i][k].splitlines()
				subSection = {}
				subSection['title'] = mainHeaders[i][k][0]
				subSection['links'] = []
				# DEBUG: print (mainHeaders[i][k][0])
				#Loop through one sub section
				for l, subHeadersSplit in enumerate(mainHeaders[i][k]): 
					subSectionDetails = {}
					subSectionDetails['url'] = subHeadersSplit.partition("(")[2].partition(")")[0]
					subSectionDetails['name'] = subHeadersSplit.partition("[")[2].partition("]")[0]
					#print (subSectionDetails)
					# print (subSectionDetails['url'])
					if(subSectionDetails['url'].strip()!='' and ('http' in subSectionDetails['url'])):
						subSection['links'].append(subSectionDetails)

				#print (subSection)
				section['subheaders'].append(subSection)
		# Get rid of empty arrays
		if(len(section['links'])!=0):
			if(len(section['subheaders'])==0):
				del section['subheaders']
			awesome['title'].append(section)
	return awesome


