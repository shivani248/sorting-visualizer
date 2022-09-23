function Selection_sort()
{
    c_delay=0;

   for(var i=0;i<array_size-1;i++)
    {
        div_update(divs[i],div_sizes[i],"#ff704d");//Color update

        index_min=i;

        for(var j=i+1;j<array_size;j++)
        {
            div_update(divs[j],div_sizes[j],"#ffff80");//Color update

            if(div_sizes[j]<div_sizes[index_min])
            {
                if(index_min!=i)
                {
                    div_update(divs[index_min],div_sizes[index_min],"#4db8ff");//Color update
                }
                index_min=j;
                div_update(divs[index_min],div_sizes[index_min],"#ff704d");//Color update
            }
            else
            {
                div_update(divs[j],div_sizes[j],"#4db8ff");//Color update
            }
        }
        
        if(index_min!=i)
        {
            var temp=div_sizes[index_min];
            div_sizes[index_min]=div_sizes[i];
            div_sizes[i]=temp;

            div_update(divs[index_min],div_sizes[index_min],"#ff704d");//Height update
            div_update(divs[i],div_sizes[i],"#ff704d");//Height update
            div_update(divs[index_min],div_sizes[index_min],"#4db8ff");//Color update
        }
        div_update(divs[i],div_sizes[i],"#1affa3");//Color update
    }
    div_update(divs[i],div_sizes[i],"#1affa3");//Color update

    enable_buttons();
}