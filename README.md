The API endpoint is GET [project_url]/api/timestamp/:date_string?

A date string is valid if can be successfully parsed by new Date(date_string).
Note that the unix timestamp needs to be an integer (not a string) specifying milliseconds.

In our test we will use date strings compliant with ISO-8601 (e.g. "2016-11-20") because this will ensure an UTC timestamp.

If the date string is empty it should be equivalent to trigger new Date(), i.e. the service uses the current timestamp.

If the date string is valid the api returns a JSON having the structure
{"unix": <date.getTime()>, "utc" : <date.toUTCString()> }

e.g. {"unix": 1479663089000 ,"utc": "Sun, 20 Nov 2016 17:31:29 GMT"}

If the date string is invalid the api returns a JSON having the structure 
{"error" : "Invalid Date" }

Add on:
 GET [project_url]/whoami will give the ip address and system info:
 
 {"ipaddress":"159.20.14.100","language":"en-US,en;q=0.5",
"software":"Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:50.0) Gecko/20100101 Firefox/50.0"}
 
