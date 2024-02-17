function cal_fine(days, fine){
    if(days>=0 && days<=5)
    {
        fine+=0;
    }

    else if(days>5 && days<=10)
    {
        fine+=(days-5)*5;
    }

    else if(days>10 && days<=30)
    {
        fine+= 25+((days-10)*10);
    }

    else
    {
        fine+= 50+100+((days-30)*15);
    }
    return fine;
}

module.exports = cal_fine;