class Contact{
    async create(req,res){
       res.send({message:"handlers"})
    }
    async findAll(req,res){
       res.send({message:"handlers"}) 
    }
    async findOne(req,res){
       res.send({message:"handlers"})  
    }
    async update(req,res){
       res.send({message:"handlers"})  
    }
    async delete(req,res){
        res.send({message:"handlers"})         
    }
    async deleteAll(req,res){
       res.send({message:"handlers"})  
    }
    async findAllFavorite(req,res){
       res.send({message:"handlers"})  
    }

}
module.exports=new Contact();