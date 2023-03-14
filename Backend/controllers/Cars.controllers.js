const Car = require("../db/Cars.model");

async function getData(query) {
  let allQueries;
  let totalElement;
  //copy all queries to reqQuery variable
  const reqQuery = { ...query };
  // remove the following fields from it so that only filter part can be done with it

  //Filter of any field
  const removeFeilds = ["sort", "order", "page", "limit"];

  removeFeilds.forEach((param) => {
    delete reqQuery[param];
  });

  let queryStr = JSON.stringify(reqQuery);

  queryStr = queryStr.replace(/\b(gt|gte|lt|lte|in)\b/g, (match) => {
    return `$${match}`;
  });

  allQueries = Car.find(JSON.parse(queryStr));

  //Sorting

  if (query.sort) {
    const sort = query.sort;
    let order = 1;

    if (query.order == "desc") {
      order = -1;
    }

    console.log(order);

    allQueries = allQueries.sort({ [sort]: `${order}` });
  }

  //Pagination

  let page = query.page || 1;
  let limit = query.limit || 10;
  let skip = limit * (page - 1);

  allQueries = allQueries.limit(limit).skip(skip);
  totalElement = await Car.countDocuments(JSON.parse(queryStr));
  data = await allQueries;

  return {
    data: data,
    count: totalElement,
  };
}

module.exports = { getData };
