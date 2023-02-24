const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
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
});

module.exports = mongoose.model('User', userSchema);
