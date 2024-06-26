# Bought & Sold

## About Bought & Sold
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

## Going to be starting revamp of this project to add / update the following:
#### Updates
- [ ] Fix known bug with `MyProfile`
- [ ] Replace JSON dataBase with Sqlite3 (Python & Django backend) 
- [ ] Use TanStack Query for state management
- [ ] Refresh site design 
#### Additions 
- [ ] Sign up for Email list 
- [ ] All Writers View
- [ ] Add likes / favorites to articles 
- [ ] Notifications for writers when readers like / comment their post 
- [ ] Article upload W/ Google Docs, Dropbox, System
- [ ] Writer Application Form Submition
- [ ] `About Us` page 
- [ ] **STRETCH:** Add Stripe integration for payments 

### Known Bug - My Profile 
```
To replicate the error do the following:

1. Go to the home screen then click the hamburger menu
2. Click "My Profile" then Sign in once re-directed
3. Then once signed in click "My Profile" again it will say "Undefined" 
4. Click the "Go back" arrow next to the URL then click My Profile again and it will render. 
```
