from twilio.rest import TwilioRestClient 
 
# put your own credentials here 
ACCOUNT_SID = "AC06a729473bc3be5d78eccd9482a8b394" 
AUTH_TOKEN = "3d18bd314153a01bcbf257f5688e11ed" 
 
client = TwilioRestClient(ACCOUNT_SID, AUTH_TOKEN) 
 
client.messages.create(
	to="+4790574389", 
	from_="+4759444131", 
	body="Hei!",  
)