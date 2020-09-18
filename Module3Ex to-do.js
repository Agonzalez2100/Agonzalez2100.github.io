window.onload=init;
function init (event)
{
    var input=document.querySelector('input');
    var add=document.querySelector('#add');
    var clear=document.querySelector('#clear');
    var tasks=document.querySelector('#tasks'); //div that is used to append new tasks + remove
    var outsideTasks=document.querySelector('#outsideTasks'); //when above div is wiped via clear, this one remains to add it back to

    /* ADD EVENT */
    add.addEventListener('click', function()
    {
        var task=input.value; input.value=''; //as soon as input is stored, wipe input box to prep for next item
        newTask(task); 
        /* makes and adds the div, task text, and done button to the DOM */
        function newTask(task)
        {
            var line=document.createElement('div'); line.classList.add('row','col-sm-12','justify-content-center'); 
            tasks.appendChild(line);

            var lineText=document.createElement('h2'); lineText.innerHTML=task; //whatever input was
            line.appendChild(lineText);

            var lineButton=document.createElement('button'); lineButton.innerHTML="DONE"; //inner=can include strong, etc. within text
            lineButton.setAttribute('type', 'button'); //syntax stuff
            line.appendChild(lineButton);

            /* INDIVIDUAL TASK BUTTON EVENT */
            //=this way, you can use each of the button's local info to know which button does what, rather than having variables for each (which is hard to automate anyway)     
            lineButton.addEventListener('click', function()
            {
                tasks.removeChild(line); //remove the div+all w/in it
            });
        }
    });

    /* CLEAR EVENT: the whole div containing all tasks is removed and then re-added as empty */
    clear.addEventListener('click', function()
    {
        outsideTasks.removeChild(tasks); //remove all tasks
        tasks=document.createElement('div'); //remake
        tasks.setAttribute('id', 'tasks'); 
        outsideTasks.appendChild(tasks); //back to normal
    });

}
