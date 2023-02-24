

<p style="text-align:center;"><img src='https://media.giphy.com/media/CuuSHzuc0O166MRfjt/giphy.gif' alt="Logo"></p>

<h1 style="color:#68D1E7;font-size:40px;text-align:center; ></h1>
<h1 align="center"> API-iNaturalistic</h1>



[![](https://img.shields.io/badge/_VIEW_DEPLOY-%233330.svg?style=for-the-badge&logo=Render)](https://sesierras.github.io)


API-iNaturalist is a RESTful API that provides access to data from the Inaturalist database. The application is built on MongoDB and Express.js and is designed to provide an easy-to-use interface for users to browse the Inaturalist database and quickly query data. As is well known, both the database and the idea itself are absolutely inspired by [iNaturalist](https://api-inaturalist.onrender.com).


## Getting Started
To get started with the API, you will need to have Node.js and MongoDB installed on your system. Once you have these installed, you can clone the repository and install the dependencies (see more in [Installation](#instalation)).

## Table of Contents
- [Getting Started](#getting-started)
- [Table of Contents](#table-of-contents)
- [Description](#description)
- [Installation](#installation)
- [API Reference](#api-reference)
- [Data schema](#data-schema)
  - [Endpoints](#endpoints)
  - [Contributing](#contributing)
  - [License](#license)

____________________

## Description
This API provides access to a database of biological occurrence records, including information about the species, location, and date of observation. The data is stored in JSON format and follows a specific schema that includes fields such as identification information, geographical coordinates, and taxonomic classification.

Users can query the database using a variety of search parameters, including species name, location, and date range. The API responds with matching records in JSON format, which can be used for further analysis or visualization.

This API is useful for researchers and enthusiasts in the fields of ecology, biodiversity, and conservation biology, as well as for applications that require species occurrence data, such as species distribution models and environmental impact assessments.

## Installation

Once you have these installed, you can clone the repository and install the dependencies by running the following commands:
```bash
git clone https://github.com/Sesierras/API-iNaturalist.git
cd iNaturalist
npm install
npm start

```
## <a name="api"></a>API Reference

The API reference for the iNaturalist API can be found on the official iNaturalist website here. This documentation provides detailed information about the endpoints available in the API, as well as how to use them.

## <a name="dataSchema"></a>Data schema


In this case, the schema defines an object that should contain 36 fields, such as id, occurrence ID, record base, modified, institution code, collection code, dataset name, catalog number, references, registered by , identified by, captive, eventDate, eventTime, verbatimEventDate, verbatimLocality, decimalLatitude, decimal longitude, coordinate uncertainty in meters, geodetic datum, country code, state province, identification ID, identification date, taxon ID, scientific name, taxon rank, kingdom, phylum, class, order, family, genus, license, rights holder, example field1, example field2. Below is the Json in detail:

```json

   id: {
    type: String,
    required: true
  },
  occurrenceID: {
    type: String,
    required: true
  },
  basisOfRecord: {
    type: String,
    required: true
  },
  modified: {
    type: Date,
    default: Date.now
  },
  institutionCode: {
    type: String,
    required: true
  },
  collectionCode: {
    type: String,
    required: true
  },
  datasetName: {
    type: String,
    required: true
  },
  catalogNumber: {
    type: String,
    required: true
  },
  references: {
    type: String,
    required: true
  },
  recordedBy: {
    type: String,
    required: true
  },
  identifiedBy: {
    type: String,
    required: true
  },
  captive: {
    type: String,
    required: true
  },
  eventDate: {
    type: Date,
    required: true
  },
  eventTime: {
    type: String,
    required: true
  },
  verbatimEventDate: {
    type: String,
    required: true
  },
  verbatimLocality: {
    type: String,
    required: true
  },
  decimalLatitude: {
    type: Number,
    required: true
  },
  decimalLongitude: {
    type: Number,
    required: true
  },
  coordinateUncertaintyInMeters: {
    type: Number,
    required: true
  },
  geodeticDatum: {
    type: String,
    required: true
  },
  countryCode: {
    type: String,
    required: true
  },
  stateProvince: {
    type: String,
    required: true
  },
  identificationID: {
    type: String,
    required: true
  },
  dateIdentified: {
    type: Date,
    required: true
  },
  taxonID: {
    type: String,
    required: true
  },
  scientificName: {
    type: String,
    required: true
  },
  taxonRank: {
    type: String,
    required: true
  },
  kingdom: {
    type: String,
    required: true
  },
  phylum: {
    type: String,
    required: true
  },
  class: {
    type: String,
    required: true
  },
  order: {
    type: String,
    required: true
  },
  family: {
    type: String,
    required: true
  },
  genus: {
    type: String,
    required: true
  },
  license: {
    type: String,
    required: true
  },
  rightsHolder: {
    type: String,
    required: true
  },
  exampleField1: {
    type: String
  },
  exampleField2: {
    type: String
  }

```
### Endpoints

The API provides endpoints to interact with the Inaturalist database. These endpoints include:

* `GET api/users` Provides access to user data was 10 the limit the number sort the observations by date in descending orders.
* `GET api/users/id` Get an specific observations by ID from the database
* `GET api/users/catalogNumber`  Provides access to specific observation by the Catalog Number.
* `GET api/users/countryCode`  Provides access to specific observations by the Country Code.
* `POST api/users` Insert a new observation
* `PUT api/users` Update an specific observations filter by ID
* `DELETE api/users/id` Delete a specific observation filter by ID


### Contributing
If you would like to contribute to the API-iNaturalist project, feel free to fork the repository and submit a pull request. Before submitting a pull request, please make sure that your code adheres to the project's coding standards and that it is well documented.

[![forthebadge](https://forthebadge.com/images/badges/ctrl-c-ctrl-v.svg)](https://forthebadge.com)
Pull requests are welcome!.
### License
API-iNaturalist Clone is licensed under _GNU General Public License v3.0_


![forthebadge](https://forthebadge.com/images/badges/60-percent-of-the-time-works-every-time.svg)
[![ForTheBadge built-with-love](http://ForTheBadge.com/images/badges/built-with-love.svg)](https://GitHub.com/sesierras/)

[![](https://img.shields.io/badge/_♥_-%233330.svg?style=for-the-badge&logo=GITHUB)](https://sesierras.github.io)
