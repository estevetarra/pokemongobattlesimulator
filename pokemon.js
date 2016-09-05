function pokemon(spiece, level, charge_move, quick_move , ivatt, ivdeff, ivsta) 
{
    this.spiece = spiece;
    this.level = level;
    this.charge_move = charge_move;
    this.quick_move = quick_move;
    this.ivatt = ivatt;
    this.ivdeff = ivdeff;
    this.ivsta = ivsta;
}

function fighter(pokemon, baseatt, basedeff, basehp, deffenfing)
{
    this.pokemon = pokemon;
    this.baseatt = baseatt;
    this.basedeff = basedeff;
    this.basehp = basehp
    this.deffenfing = deffenfing;
    this.cooldown = 0;
    
}

function battle(fighter1, fighter2)
{
    this.fighter1 = fighter1;
    this.fighter2 = fighter2;
    this.time = 0;
}

