var countries = ['CATEGORY', 'ADVERTISING', 'COOKING','ENTERTAERMENT','EVENTS','FASHION','GAMMING','HEALTH','HOBBY','HOW TO','KID'],
    select = document.getElementById( 'countries' );



for(country in countries ) {
    
    select.add( new Option( countries[country] ) );
    
	
	
};



var agerating = ['AGE RATING', 'GENERAL AUDENCE', 'PG PARENTAL GUIDANCE SUGGESTED','PG - 13 PARENTAL STRONGLY CATIONED','RESTRICTED','NO ONE AD 17 & UNDER ADMITED','NOT RATED'],
    select = document.getElementById( 'agerating' );

for(age in agerating ) {
    
    select.add( new Option( agerating[age] ) );
    
};




var editers = ['EDITORS', 'NONE', 'EDITOR'],
    select = document.getElementById( 'editers' );

for(edit in editers ) {
    
    select.add( new Option( editers[edit] ) );
    
};

