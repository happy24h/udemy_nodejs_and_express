const { uploadSingleFile } = require("../services/fileService");
const Customer = require("../models/customer");
const {
  createCustomerService,
  createArrayCustomerService,
  getAllCustomerService,
  putUpdateCustomerService,
  deleteACustomerService,
  deleteArrayCustomerService,
} = require("../services/customerService");

// {key: value, key1: value1}
module.exports = {
  postCreateCustomer: async (req, res) => {
    let { name, address, phone, email, description } = req.body;
    let imageUrl = "";

    console.log(">>> name:", name);
    if (!req.files || Object.keys(req.files).length === 0) {
    } else {
      let result = await uploadSingleFile(req.files.image);
      imageUrl = result.path;
    }

    let customerData = {
      name,
      address,
      phone,
      email,
      description,
      image: imageUrl,
    };

    let customer = await createCustomerService(customerData);
    return res.status(200).json({
      EC: 0,
      data: customer,
    });
  },

  postCreateArrayCustomerService: async (req, res) => {
    let customers = await createArrayCustomerService(req.body.customers);
    if (customers) {
      return res.status(200).json({ EC: 0, data: customers });
    } else {
      return res.status(200).json({ EC: -1, data: customers });
    }
  },

  getAllCustomers: async (req, res) => {
    console.log(req.query);
    let limit = req.query.limit;
    let page = req.query.page;
    let result = null;
    if (limit && page) {
      result = await getAllCustomerService(limit, page);
    } else {
      result = await getAllCustomerService();
    }
    return res.status(200).json({
      EC: 0,
      data: result,
    });
  },

  putUpdateCustomer: async (req, res) => {
    let dataCustomer = req.body;
    let result = await putUpdateCustomerService(dataCustomer);
    return res.status(200).json({
      EC: 0,
      data: result,
    });
  },
  deleteACustomer: async (req, res) => {
    let id = req.body.id;
    let result = await deleteACustomerService(id);
    // return result;
    return res.status(200).json({
      EC: 0,
      data: result,
    });
  },

  deleteArrayCustomer: async (req, res) => {
    let ids = req.body.customersId;
    console.log(">>> check ids: ", ids);
    let result = await deleteArrayCustomerService(ids);
    return res.status(200).json({
      EC: 0,
      data: result,
    });
  },
};
