const Project = require("../models/project");
const aqp = require("api-query-params");

module.exports = {
  createProject: async (data) => {
    if (data.type === "EMPTY-PROJECT") {
      let result = await Project.create(data);
      return result;
    }
    if (data.type === "ADD-USERS") {
      console.log(">>> check data: ", data);
      let myProject = await Project.findById(data.projectId).exec();
      for (let i = 0; i < data.usersArr.length; i++) {
        myProject.usersInfor.push(data.usersArr[i]);
      }
      let newResult = await myProject.save();
      console.log(myProject);
      // find project by id
      return newResult;
    }

    if (data.type === "REMOVE-USERS") {
      let myProject = await Project.findById(data.projectId).exec();
      for (let i = 0; i < data.usersArr.length; i++) {
        myProject.usersInfor.pull(data.usersArr[i]);
      }
      let newResult = await myProject.save();
      return newResult;
    }
    return null;
  },

  getProject: async (queryString) => {
    const page = queryString.page;
    const { filter, limit, population } = aqp(queryString);
    console.log("before", filter);
    delete filter.page;
    console.log("after", filter);
    let offset = (page - 1) * limit;
    result = await Project.find(filter)
      .populate(population)
      .skip(offset)
      .limit(limit)
      .exec();
    return result;
  },

  uProject: async (data) => {
    let result = await Project.updateOne({ _id: data.id }, { ...data });
    return result;
  },
  dProject: async (id) => {
    let result = await Project.deleteById(id);
    return result;
  },
};
