export const getAllproducts = (req: any, res: any) => {
    res.send("lista de todos los productos");
    res.status(200).json({
     message: "unach",
   })
};