function getRowSuchParamaterHasValue(objectjson, param,value)
{
	for(var i = 0; i < objectjson.length; i++)
		if(objectjson[i][param] == value) 
			return objectjson[i];
}

function Pokemon(spiece, level, levelmultiplayer , charge_move, quick_move , ivatt, ivdeff, ivsta) 
{
    this.spiece = spiece;
    this.level = level;
    this.levelmultiplayer = levelmultiplayer;
    //alert(this.levelmultiplayer);
    this.charge_move = charge_move;
    this.quick_move = quick_move;
    this.ivatt = ivatt;
    this.ivdeff = ivdeff;
    this.ivsta = ivsta;
}

function Fighter(pokemon, baseatt, basedeff, basehp, deffending)
{
    this.pokemon = pokemon;
    this.baseatt = baseatt;
    this.basedeff = basedeff;
    this.basehp = basehp;
    this.att = (baseatt + this.pokemon.ivatt) * this.pokemon.levelmultiplayer;
    this.deff = (basedeff + this.pokemon.ivdeff) * this.pokemon.levelmultiplayer;
    this.deffending = deffending;
    this.cooldown = -10;
    this.nowmove = "NONE";
    this.energy = 0;
    if( deffending )
    {
        this.hp = 2 * (this.basehp + this.pokemon.ivsta) * this.pokemon.levelmultiplayer;
    } else 
    {
        this.hp = (this.basehp + this.pokemon.ivsta) * this.pokemon.levelmultiplayer;
    }
}

function Battle(fighter1, fighter2, quick_moves, charge_moves)
{
    this.fighter1 = fighter1;
    this.fighter2 = fighter2;
    this.quick_moves = quick_moves;
    this.charge_moves = charge_moves;
    this.time = 0;
    this.next_turn = function ms10more()
    {
        //If both of them are alive
        if(fighter1.cooldown == 0)
        {
            //inflict damage to the enemy
            //Update energy of both
            var stab = 1;
            var effectiveness = 1;
            var power = 1;
            var damage = Math.floor(0.5 * power * (this.fighter1.att / this.fighter2.deff) * stab * effectiveness);
            
            fighter2.hp -= damage;
            //Notice that this isn't correct... fighter2 have advantadge
            fighter2.energy += damage/2;
            fighter1.energy += 2;
        }
        if(fighter1.cooldown <= 0)
        {
          //decide next move
          //Update energy+
          fighter1.cooldown = 10;

        }
        if(fighter1.cooldown == 0)
        {
            //inflict damage to the enemy
            //Update energy of both
            var stab = 1;
            var effectiveness = 1;
            var power = 1;
            var damage = Math.floor(0.5 * power * (this.fighter2.att / this.figther1.deff) * stab * effectiveness);
            
            fighter1.hp -= damage;
            //Notice that this isn't correct... fighter2 have advantadge
            fighter1.energy += damage/2;
            fighter2.energy += 2;
        }
        if(fighter2.cooldown <= 0)
        {
          //decide next move
          //Update energy+
          fighter2.cooldown = 10;

        }
        
        fighter1.cooldown -= 10;
        fighter2.cooldown -= 10;
        //decrease cooldowmn
        
    };
    this.getWinner = function getWinner()
    {
    	while(this.fighter1.hp > 0 && this.fighter2.hp > 0)
    	{
    		this.next_turn();
    	}
    	if(this.fighter1.hp <= 0 )
    	{
    		return this.fighter1.pokemon.spiece;
    	} 
    	else
    	{
    		return this.fighter2.pokemon.spiece;
    	}
        
        //decrease cooldowmn
        
    };
}
