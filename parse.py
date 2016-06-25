import json;
import re




# url = "https://github.com/weblancaster/awesome-IoT-hybrid"
# print (url.replace("github", "raw.githubusercontent")+"/master/README.md")
# print ("https://raw.githubusercontent.com/weblancaster/awesome-IoT-hybrid/master/README.md")
awesome = {}
awesome['title'] =[]

with open('2.md', 'r') as content_file:
    content = content_file.read()


mainHeaders = content.split('\n## ')[1:-1]



for i, mainHeader in enumerate(mainHeaders): #Main BRANCH SPLIT BY ##
	mainHeaders[i] = re.split('\n### |\n#### ',mainHeaders[i])

	mainHeaders[i][0] = mainHeaders[i][0].splitlines()
	section = {} # One section inside awesome list with no sub sections
	section['name'] = mainHeaders[i][0][0]
	section['links'] = []
	section['subheaders'] = []
	#print (mainHeaders[i][0])
	for j, sectionLinks in enumerate(mainHeaders[i][0]): #PARSE 0th INDEX DIRECTLY BELOW MAIN HEADER
		sectionDetails = {}
		sectionDetails['url'] = sectionLinks.partition("(")[2].partition(")")[0]
		sectionDetails['name'] = sectionLinks.partition("[")[2].partition("]")[0]
		if(sectionDetails['url'].strip()!='' and ('http' in sectionDetails['url'])):
			section['links'].append(sectionDetails)
	
	#IF HEADER HAS SUB HEADERS PARSE THEM TOO
	mainHeaders[i].pop(0)
	if (len(mainHeaders[i]) !=0): 
		
		
		for k, subHeaders in enumerate(mainHeaders[i]): #Loop through subsection Heading
			mainHeaders[i][k] = mainHeaders[i][k].splitlines()
			subSection = {}
			subSection['title'] = mainHeaders[i][k][0]
			subSection['links'] = []
			#print (mainHeaders[i][k][0])
			for l, subHeadersSplit in enumerate(mainHeaders[i][k]): #Loop through one sub section
				subSectionDetails = {}
				subSectionDetails['url'] = subHeadersSplit.partition("(")[2].partition(")")[0]
				subSectionDetails['name'] = subHeadersSplit.partition("[")[2].partition("]")[0]
				#print (subSectionDetails)
				# print (subSectionDetails['url'])
				if(subSectionDetails['url'].strip()!='' and ('http' in subSectionDetails['url'])):
					subSection['links'].append(subSectionDetails)

			#print (subSection)
			section['subheaders'].append(subSection)

	if(len(section['links'])!=0):
		if(len(section['subheaders'])==0):
			del section['subheaders']
		awesome['title'].append(section)

print (awesome)