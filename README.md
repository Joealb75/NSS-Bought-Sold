# Bought & Sold

## About Bought & Sold
Bought & Sold is a blog that allows professionals in the Real Estate industry to easily publish, edit, view and filter articles about real estate related topics along with engaging with their community via comments under articles. 

Tech Used: JavaScript and React was used to dynamically render components on the site. I used bootstrap CSS to style the site and a local JSON-Server to store and retrieve the necessary data. I also utilized an ERD to visualize the dataflow and Figma to wireframe the design of the site. 

**For the latest version of my app clone the `develop` branch**

## MUST READ
While this project was created to showcase what I learned during the first 3 months at NSS, I am activly working to improve this project and bring it up to speed with additional features and a proper back-end. 

If you want to view the 2-wk sprint version of this project clone from the `MVP-PLUS-Complete` branch and get the JSON database mention in the install steps. 

- **If you want to see the latest version please contact me for a demo of the site.**

## Steps to install

### Get the Client-Side
``` 
mkdir JA-B-S-NSS-Capstone 
cd JA-B&S-NSS-Capstone
git clone git@github.com:Joealb75/NSS-Bought-Sold.git
code .
```

### Get the Database 
*Note:* If you cloned any other branch besides the `MVP-PLUS-Complete` branch you
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

## Currently revamping this project to add / update the following:
#### Currently Working On 
- [ ] Replace JSON DB with Python & Django backend W/ Sqlite3 DB 
- [ ] Fix known bug with `MyProfile` - Will be fixed with TSQ ↴
- [ ] Use TanStack Query for state management
#### Updates
- [ ] Refresh site design 
#### Additions 
- [ ] Authorization Views for Readers / Writers
- [ ] Create Settings for Readers / Writers 
- [ ] Sign up for Email list 
- [ ] All Writers View - Search / Filter Functionallity 
- [ ] Add likes / favorites to articles 
- [ ] Notifications for writers when readers like / comment their post
- [ ] Analytics for writer Profile / Article Performance 
- [ ] Article upload W/ Google Docs, Dropbox, System
- [ ] Writer Application Form Submition
- [ ] `About Us` page
- [ ] **STRETCH:** Add Stripe integration for payments for experance 

#### Completed 
- [X] Updated ERD
- [X] Fixtures & Models + DB Seeded W/ Test Data
- [X] Designed PostMan Collection for B&S with data for easy testing going forward
- **NOTE** ⤴ `I add to it as new ViewSets & Routes are completed`

#### Known Bug - My Profile 
```
To replicate the error do the following:

1. Go to the home screen then click the hamburger menu
2. Click "My Profile" then Sign in once re-directed
3. Then once signed in click "My Profile" again it will say "Undefined" 
4. Click the "Go back" arrow next to the URL then click My Profile again and it will render. 
```
