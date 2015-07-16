([
    {
        shouldDeps: [
            {
            	block: 'header',
            	elems: [
            	    { elem: 'auth', mods: {'user': 'login'} }
            	]
            }
        ]
    },
    {
        tech: 'js',
        mustDeps: {
            tech: 'bemhtml',
            block: 'header', 
            elem: 'auth',
            mods: [
                {'user': 'fb'}
            ]
        }
    }
]);
