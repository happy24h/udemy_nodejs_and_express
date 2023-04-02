const Customer = require("../models/customer");
const aqp = require("api-query-params");

const createCustomerService = async (customerData) => {
  try {
    let result = await Customer.create({
      name: customerData.name,
      address: customerData.address,
      phone: customerData.phone,
      email: customerData.email,
      description: customerData.description,
      image: customerData.image,
    });
    return result;
  } catch (error) {
    console.log(error);
    return null;
  }
};

const createArrayCustomerService = async (arr) => {
  try {
    let result = await Customer.insertMany(arr);
    return result;
  } catch (error) {
    console.log("error", error);
    return null;
  }
};

// Tìm kiếm và phân trang không dùng thư viện
// const getAllCustomerService = async (limit, page, name) => {
//   try {
//     let result = null;
//     if (limit && page) {
//       let offset = (page - 1) * limit;
//       if (name) {
//         result = await Customer.find({
//           name: { $regex: ".*" + name + ".*" },
//         })
//           .skip(offset)
//           .limit(limit)
//           .exec();
//       } else {
//         result = await Customer.find({}).skip(offset).limit(limit).exec();
//       }
//     } else {
//       result = await Customer.find({});
//     }

//     return result;
//   } catch (error) {
//     console.log("check error", error);
//     return null;
//   }
// };

const getAllCustomerService = async (limit, page, name, queryString) => {
  try {
    let result = null;
    if (limit && page) {
      let offset = (page - 1) * limit;
      const { filter } = aqp(queryString);
      (filter.name = { $regex: ".*" + name + ".*" }), delete filter.page;
      console.log(">>> check filter: ", filter);

      result = await Customer.find(filter).skip(offset).limit(limit).exec();
    } else {
      result = await Customer.find({});
    }

    return result;
  } catch (error) {
    console.log("check error", error);
    return null;
  }
};

const putUpdateCustomerService = async (dataCustomer) => {
  let { name, address, phone, email, description, image, customerId } =
    dataCustomer;
  try {
    let result = await Customer.updateOne(
      { _id: customerId },
      { name, address, phone, email, description, image }
    );
    return result;
  } catch (error) {
    console.log(error);
    return null;
  }
};

const deleteACustomerService = async (id) => {
  try {
    let result = await Customer.deleteById(id);
    return result;
  } catch (error) {
    console.log("error >>>", error);
    return null;
  }
};

// const deleteACustomerService = async (id) => {
//   try {
//     let result = await Customer.findByHoiDanIT(id);
//     return result;
//   } catch (error) {
//     console.log("error >>>", error);
//     return null;
//   }
// };

const deleteArrayCustomerService = async (arrIds) => {
  // mongoose bulk delete
  try {
    let result = await Customer.delete({ _id: { $in: arrIds } });
    return result;
  } catch (error) {
    console.log("error >>>>", error);
    return null;
  }
};
module.exports = {
  createCustomerService,
  createArrayCustomerService,
  getAllCustomerService,
  putUpdateCustomerService,
  deleteACustomerService,
  deleteArrayCustomerService,
};
