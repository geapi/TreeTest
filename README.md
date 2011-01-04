*Project*:   TreeTest    
*Copyright*: ©2010    
*Author*: Georg Apitz   
*Date*: 29/11/2010   

test app to work around issues with the tree controller and delete of nodes

## Question:
Why do records that get deleted marked as DESTOYED_CLEAN but not removed from the list?

## Answer:

[1:35pm] erichocean-ios: geapi: it looks to me like SC.ManyArray#length() is wrong   
[1:36pm] erichocean-ios: it's not at all dependent on the state of the records whose ids are in the toMany() property 	
[1:36pm] erichocean-ios: honestly, I don't use the toOne() and toMany() helpers, so I've never seen this bug	
[1:37pm] erichocean-ios: if you re-wrote the files property in TreeTest.File to be a query, it would work correctly			
[1:37pm] erichocean-ios: parentDirectory=%@, this.get('id')			
[1:38pm] erichocean-ios: would be the query condition			
[1:38pm] geapi: erichocean-ios: ah, I knew it was something stupid/simple			
[1:38pm] geapi: erichocean-ios: thanks, I'll try that	
[1:39pm] erichocean-ios: geapi: https://github.com/suvajitgupta/Tasks/blob/master/frameworks/core-tasks/models/user.js#L226			
[1:39pm] erichocean-ios: something like that is what you want	
[1:39pm] erichocean-ios: (ignore the _id property, and just use 'id')		
[1:40pm] erichocean-ios: or better than 'id', use this.get('primaryKey')	
[1:40pm] erichocean-ios: by default that is 'id', but people can change it	

