function Insertion()
{
    c_delay=0;

    for(var j=0;j<array_size;j++)
    {
        div_update(divs[j],div_sizes[j],"#ffff80");//Color update

        var key= div_sizes[j];
        var i=j-1;
        while(i>=0 && div_sizes[i]>key)
        {
            div_update(divs[i],div_sizes[i],"#ff704d");//Color update
            div_update(divs[i+1],div_sizes[i+1],"#ff704d");//Color update

            div_sizes[i+1]=div_sizes[i];

            div_update(divs[i],div_sizes[i],"#ff704d");//Height update
            div_update(divs[i+1],div_sizes[i+1],"#ff704d");//Height update
    
            div_update(divs[i],div_sizes[i],"#4db8ff");//Color update
            if(i==(j-1))
            {
                div_update(divs[i+1],div_sizes[i+1],"#ffff80");//Color update
            }
            else
            {
                div_update(divs[i+1],div_sizes[i+1],"#4db8ff");//Color update
            }
            i-=1;
        }
        div_sizes[i+1]=key;

        for(var t=0;t<j;t++)
        {
            div_update(divs[t],div_sizes[t],"#1affa3");//Color update
        }
    }
    div_update(divs[j-1],div_sizes[j-1],"#1affa3");//Color update

    enable_buttons();
}