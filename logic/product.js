const PRODUCTS = require('../model/products')


module.exports = {
    getProducts : async (req,res) => {
        const products = await PRODUCTS.find()
        res.json({
            status: "success",
            data: products.map(res => {
                return {
                    id: res.id,
                    name: res.name,
                    price: res.price,
                    description: res.description,
                }
            })
        })
    },
    insertProduct : async (req,res) => {
       const product = await new PRODUCTS({
            name: req.body.name,
            price: req.body.price,
            description: req.body.description
       }).save()
       
       res.json({"message:" : "inserted successfully", id : product.id, name : product.name})
    },
    deleteProduct : async (req,res) => { 
        const id = req.params.id
        const del = await PRODUCTS.findByIdAndRemove(id)
        res.json({"message" : del})
    }
}
