function pokemon(spiece, level, levelmultiplayer , charge_move, quick_move , ivatt, ivdeff, ivsta) 
{
    this.spiece = spiece;
    this.level = level;
    this.levelmultiplayer = levelmultiplayer;
    this.charge_move = charge_move;
    this.quick_move = quick_move;
    this.ivatt = ivatt;
    this.ivdeff = ivdeff;
    this.ivsta = ivsta;
}

function fighter(pokemon, baseatt, basedeff, basehp, deffending)
{
    this.pokemon = pokemon;
    this.baseatt = baseatt;
    this.basedeff = basedeff;
    this.basehp = basehp
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

function battle(fighter1, fighter2, quick_move, charge_moves)
{
    this.fighter1 = fighter1;
    this.fighter2 = fighter2;
    this.quick_move = quick_move;
    this.charge_moves = charge_moves;
    this.time = 0;
    this.next_turn = function ms10more()
    {
        //If both of them are alive
        if(fighter1.cooldown == 0)
        {
            //inflict damage to the enemy
            //Update energy of both
        }
        if(fighter1.cooldown <= 0)
        {
          //decide next move
          //Update energy

        }
        
        //decrease cooldowmn
        
    };
}
