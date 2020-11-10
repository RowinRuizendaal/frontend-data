# Functional-programming


## Volkskrant assignment

For the Volkskrant, we are having a look into the RDW datasets that are provided to find interesting insights for a potential article about parking, where it is all about cars.

The assignment is to filter and find connections with different datasets where 'parking' (cars) is the middle word for each of these datasets, one head question can be answered by the datasets. The main goal of this assignment is to link interesting links with each other and to filter data out of the available datasets

This wiki also contains assignments apart from the volkrant, these are practice datasets that were filled in by the students that are following the course: datavizualisation.


## Concept

Making a geographical map for parking places where you can see how much you need to pay for a certain parking place and how much it cost per hour also I am going to note down how you can pay the parking fee (cash, banknotes, VISA etc)

## Research question

How can you pay at a specific parking garage (by card, coins, banknotes, visa etc.)

 - Are there more parking garages where you can pay by card in 2020?
 - Are there still parking garages where you can pay by coins/banknotes

 ## Sub questions

- Are there parking areas where you can pay with cryptocoins?
- How far apart are the payment terminals in a particular parking area?
- Are the payment machines wheelchair-proof (height of machines)?
- Where can you still pay with cash at a payment terminal?
- How are the payment methods (cash, pin) distributed throughout the city? Center more pin options than outside the center?

## Datasets needed

 * https://data.overheid.nl/dataset/11389-open-data-parkeren--betaalmethode-gebied (areaid, paymentmethod)
 * https://opendata.rdw.nl/Parkeren/Open-Data-Parkeren-GEBIED/adw6-9hsg (not sure yet if I am going to use this one)
 * https://opendata.rdw.nl/Parkeren/GEO-Parkeer-Garages/t5pc-eb34 (areaid, Location, AreaDesc)
 * https://opendata.rdw.nl/Parkeren/Open-Data-Parkeren-TARIEFDEEL/534e-5vdg (From peer-feedback)

The primary key (PK) in these datasets is : areaid, with this key I am able to find other datasets with this value to join each other

## Assumptions

- There are more parking spots where you can pay by card then with coins or banknotes
- Parking spots closer to the city centre have more payment options and are more expensive than ones further away


## Installing and using the project

**To run this project you need to have a dataset avaible in the directory**

### Install project

```
yarn install
```

### Compiles and hot-reloads for development
```
npm run dev || yarn nodemon
```


### Lints and fixes files

Fix all lint issues with just one command

```
npm run lint
```

### Sketches

![Sketches](https://raw.githubusercontent.com/wiki/RowinRuizendaal/functional-programming/assets/sketches.png)


### License

Authtor: [RowinRuizendaal](https://github.com/rowinruizendaal), license: [MIT](https://github.com/RowinRuizendaal/functional-programming/blob/Master/LICENSE)


### Credits

[vuurvos1](https://github.com/vuurvos1) For the good coding talks in Discord ༼ つ ◕_◕ ༽つ and the helpfull help


### Resources

Arora, S. (2019, March 27). Understanding Higher-Order Functions in JavaScript - Bits and Pieces. Medium. 
https://blog.bitsrc.io/understanding-higher-order-functions-in-javascript-75461803bad

Elliott, E. (2019, July 2). Master the JavaScript Interview: What is Functional Programming? Medium. 
https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0

Open Data | | Open Data. (n.d.). RDW. Retrieved October 29, 2020, from 
https://opendata.rdw.nl/
