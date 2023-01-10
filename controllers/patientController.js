// TODO 4: SETUP CONTROLLER

// import model patient
const Patient = require("../models/Patient");

// class patient controller
class patientController {
    // method get all resources patients
    async index(req, res) {
        const patients = await Patient.all();

        if (patients.length > 0) {
            const data = {
                message: "Get All Resources",
                data: patients,
            };

            // return response status code 200 and json data
            return res.status(200).json(data);
        }

        const data = {
            message: "Resources is empty",
        };
        
        // return response status code 200 and json data
        return res.status(200).json(data);
    }

    // method store patients
    async store(req, res) {

        //destructing object req.body
        const { name, phone, address, status, in_date_at, out_date_at } = req.body;

        // condition if data is required
        if (!name || !phone || !address || !status || !in_date_at || !out_date_at) {
            const data = {
                message: "Data is required",
            };

            // return response status code 422 and json data

            return res.status(422).json(data);
        }

        // condition for data phone max 12 number
        else if (isNaN(parseInt(phone)) || phone.length < 12) {
            const data = {
                message: "Phone number must be numeric, max 12",
            };
            
            // return response status code 422 and json data
            return res.status(422).json(data);
        }

        // check date
        else if (isNaN(Date.parse(in_date_at))) {
            const data = {
                message: "The date must be valid"
            };

            // return response status code 422 and json data
            return res.status(422).json(data);
        }
        
        const patient = await Patient.create(req.body);
            
        const data = {
            message: "Resources is added successfully",
            data: patient,
        };

        // return response status code 422 and json data
        return res.status(201).json(data);
    }


    // method update patients
    async update(req, res) {
        const { id } = req.params;
        const patient = await Patient.find(id);

        // check if patient
        if (patient) {
            const patientUpdated = await Patient.update(id, req.body);
            
            const data =  {
                message: "Resources is updated successfully",
                data: patientUpdated,
            };

            res.status(200).json(data);
        } else {
            const data = {
                message: "Resources not found",
            };

            res.status(404).json(data);
        }
    }

    // method delete resource by id
    async destroy(req, res) {
        const { id } = req.params;

        const patient = await Patient.find(id);

        // check if patient
        if (patient) {
            await Patient.delete(id);
            const data = {
                message: "Resources is deleted successfully",
            };

            // return response status code 200 and json data
            res.status(200).json(data);
        
        } else {
            const data = {
                message: "Resources not found",
            };
        // return response status code 404 and json data
        res.status(404).json(data);    
        }
    }

    // method show by id
    async show (req, res) {
        const { id } = req.params;

        const patient = await Patient.find(id);
        // check if patients
        if (patient) {
            const data = {
                message: "Get detail resources",
                data: patient,
            };
            // return response status code 200 and json data
            res.status(200).json(data);
        
        } else {
            const data = {
                message: "Resources not found",
            };

            // return response status code 404 and json data
            res.status(404).json(data);
        
        }
    }

    // method search by name
    async search(req, res) {
        const { name } = req.params;

        const patient = await Patient.search(name);
        // check if patient
        if (patient) {
            const data = {
                message: "Get resources by name",
                data: patient
            };

            // return response status code 200 and json data
            res.status(200).json(data);

        } else {
            const data = {
                message: "Resources not found",
            };

            // return response status code 404 and json data
            res.status(404).json(data);
        }
    }

    // method get all patients by status positive
    async positive(req, res) {
        const patient = await Patient.findByStatus('positive');
        const total = patient.length;
        // check if patient
        if (patient) {
            const data = {
                message: "Get positive resources",
                total: total,
                data: patient,
            };

            // return response status code 404 and json data
            res.status(404).json(data);
        }
    }

    // method get all patients by status recovered
    async recovered(req, res) {
        const patient = await Patient.findByStatus('recovered');
        const total = patient.length;
        // check if patient
        if (patient) {
            const data = {
                message: "Get recovered resources",
                total: total,
                data: patient,
            };
            // return response status code 200 and json data
            res.status(200).json(data);
        
        } else {
            const data = {
                message: "Resources not found",
            };
            // return response status code 404 and json data
            res.status(404).json(data);
        }
    }

    // method get all patients by status dead
    async dead(req, res) {
        const patient = await Patient.findByStatus('dead');
        const total = patient.length;
        if (patient) {
            const data = {
                message: "Get dead resources",
                total: total,
                data: patient,
            };

            // return response status code 200 and json data
            res.status(200).json(data);
        
        } else {
            const data = {
                message: "Resources not found",
            };

            // return response status code 404 and json data
            res.status(404).json(data);
        }
    }
    
}

const object = new patientController();
module.exports = object;