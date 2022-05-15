

const asyncHandler = require('../middlewares/async')
const sql = require("mssql");

const sqlConfig = {
  user: "sa",
  password: "1234567890",
  database: "Versale",
  server: "localhost",
  options: {
    trustedConnection: true,
    encrypt: true,
    enableArithAbort: true,
    trustServerCertificate: true,
  },
};


exports.getallstock =asyncHandler( async(req,res,next)=>{
    var conn = new sql.ConnectionPool(sqlConfig);
  conn
    .connect()
    .then(function () {
      var request = new sql.Request(conn);
      request
        .query(
          `select * from Stock`
        )
        .then(function (recordset) {
          console.log(recordset.recordset)
           res.status(200).json({
                    success:true,
                    data:JSON.stringify(recordset.recordset)
                })
          conn.close();
        })
        .catch(function (err) {
         res.status(200).json({
                    success:false,
                    data:'failed'
                })
          conn.close();
        });
      console.log("connection is created");
    })
    .catch(function (err) {
        res.status(200).json({
                    success:false,
                    data:'failed'
                })
    });
   
})

exports.stockInvm =asyncHandler( async(req,res,next)=>{

      var conn = new sql.ConnectionPool(sqlConfig);
  conn
    .connect()
    .then(function () {
      var request = new sql.Request(conn);
      request
        .query(
          `select * from InvM`
        )
        .then(function (recordset) {
          console.log(recordset.recordset)
           res.status(200).json({
                    success:true,
                    data:JSON.stringify(recordset.recordset)
                })
          conn.close();
        })
        .catch(function (err) {
         res.status(200).json({
                    success:false,
                    data:'failed'
                })
          conn.close();
        });
      console.log("connection is created");
    })
    .catch(function (err) {
        res.status(200).json({
                    success:false,
                    data:'failed'
                })
    });
})

exports.purchase =asyncHandler( async(req,res,next)=>{
    var conn = new sql.ConnectionPool(sqlConfig);
  conn
    .connect()
    .then(function () {
      var request = new sql.Request(conn);
      request
        .query(
          `select * from purchase`
        )
        .then(function (recordset) {
          console.log(recordset.recordset)
           res.status(200).json({
                    success:true,
                    data:JSON.stringify(recordset.recordset)
                })
          conn.close();
        })
        .catch(function (err) {
         res.status(200).json({
                    success:false,
                    data:'failed'
                })
          conn.close();
        });
      console.log("connection is created");
    })
    .catch(function (err) {
        res.status(200).json({
                    success:false,
                    data:'failed'
                })
    });
})

exports.purchasereturn =asyncHandler( async(req,res,next)=>{
    var conn = new sql.ConnectionPool(sqlConfig);
  conn
    .connect()
    .then(function () {
      var request = new sql.Request(conn);
      request
        .query(
          `select * from PRetM `
        )
        .then(function (recordset) {
          console.log(recordset.recordset)
           res.status(200).json({
                    success:true,
                    data:JSON.stringify(recordset.recordset)
                })
          conn.close();
        })
        .catch(function (err) {
         res.status(404).json({
                    success:false,
                    data:'failed'
                })
          conn.close();
        });
      console.log("connection is created");
    })
    .catch(function (err) {
        res.status(404).json({
                    success:false,
                    data:'failed'
                })
    });
})

exports.addstock =asyncHandler( async(req,res,next)=>{
    console.log(req.body)
    res.status(200).json({
        data:req.body
    })
//     var conn = new sql.ConnectionPool(sqlConfig);
//   conn
//     .connect()
//     .then(function () {
//       var request = new sql.Request(conn);
//       request
//         .query(
//           `select * from PRetM `
//         )
//         .then(function (recordset) {
//           console.log(recordset.recordset)
//            res.status(200).json({
//                     success:true,
//                     data:JSON.stringify(recordset.recordset)
//                 })
//           conn.close();
//         })
//         .catch(function (err) {
//          res.status(200).json({
//                     success:false,
//                     data:'failed'
//                 })
//           conn.close();
//         });
//       console.log("connection is created");
//     })
//     .catch(function (err) {
//         res.status(200).json({
//                     success:false,
//                     data:'failed'
//                 })
//     });
})