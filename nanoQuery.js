var nq = {

	elem : function(id){
		return getElementById(id);
	}
	, e : function(id)
	{
		//Shortcut, oh no!
		return this.elem(id); 
	}
	, el : function(id)
	{
		//Another shortcut
		return this.elem(id);
	}
};