# Bought & Sold

Bought & Sold is a blog that allows professionals in the Real Estate industry to easily publish, edit, view and filter articles about real estate related topics along with engaging with their community via comments under articles. 

Tech Used: JavaScript and React was used to dynamically render components on the site. I used bootstrap CSS to style the site and a local JSON-Server to store and retrieve the necessary data. I also utilized an ERD to visualize the dataflow and Figma to wireframe the design of the site. 


## Steps to install

### Get the Client-Side
``` 
mkdir JA-B-S-NSS-Capstone 
cd JA-B&S-NSS-Capstone
git clone git@github.com:Joealb75/NSS-Bought-Sold.git
code .
```

### Get the Database 
```
cd JS-B-S-NSS-Capstone
git clone git@github.com:Joealb75/NSS-B-S-API.git
code .
```

- install necessary dependencies
  - `npm install`
  - `npm install react react-dom react-router-dom`
 
## Run the Application 
### Open the Client-Side 
```
cd JA-B-S-NSS-Capstone
cd NSS-Bought-Sold
rserve (myalias) | npm run dev
```
### Open the Database 
```
cd JA-B-S-NSS-Capstone
cd Bought-Sold-All
jserve (myalias) | json-server database.json -p 8088 --watch <-- Who wants to type all of this -_-
```
### Sucess!
You have made it into my application
feel free to browse around and when you need to sign in so feel free to use my account `Joe@BoughtAndSold.com`

Any feedback is greatly appreciated. The planning, design and implementation was all part of a 2-wk sprint we did after 3 months. 
