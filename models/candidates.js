const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const candidateSchema = new Schema({
    passportphoto:{
        data: Buffer,
        contentType: String,
        required: false
    },
    registrationdate:{
        type: String,
        required: true,
    },
    name:{
        type: String,
        required: true,
        uppercase: true
    },
    phonenumber:{
        type: String,
        required: true,
    },
    dateofbirth:{
        type: String,
        required: true,
    },
    maritalstatus:{
        type: String,
        required: true,
        uppercase: true
    },
    numberofchildren:{
        type: String,
        required: true,
    },
    passportnumber:{
        type: String,
        required: true,
        uppercase: true
    },
    fullphoto:{
        data: Buffer,
        contentType: String,
        required: false
    },
    religion:{
        type: String,
        required: true,
        uppercase: true
    },
    jobtitle:{
        type: String,
        required: true,
        uppercase: true
    },
    ninnumber:{
        type: String,
        required: true,
        uppercase: true
    },
    spousesurname:{
        type: String,
        required: false,
        uppercase: true
    },
    spousegivenname:{
        type: String,
        required: false,
        uppercase: true
    },
    dateofmarriage:{
        type: String,
        required: false,
    },
    placeofmarriage:{
        type: String,
        required: false,
        uppercase: true
    }
},{timestamps: true});

const Candidate = new mongoose.model('Candidate', candidateSchema);
module.exports = Candidate;