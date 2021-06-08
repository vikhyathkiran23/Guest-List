Block_Names = [];
Inline_Names = [];

function Submit() {
    Entered_Name = document.getElementById("Name_Input").value;
    Block_Names.push("<br>" + Entered_Name);
    Inline_Names.push(Entered_Name);
    console.log(Entered_Name);
    console.log(Inline_Names);
    document.getElementById("Shown_Name_2").innerHTML = Inline_Names;


}

function Show() {
    document.getElementById("Shown_Names").innerHTML = Block_Names;
    document.getElementById("Sorted_div").hidden = false;
}

function Sorting() {
    var Sorted_List = Block_Names.sort();
    document.getElementById("Sorted_List").innerHTML = Sorted_List;
}

function Search() {
    Search_Value = document.getElementById("Search_value_input").value;
    Instances_found = 0;
    for (j = 0; j < Inline_Names.length; j++) {
        console.log(Inline_Names[j])
        if (Search_Value == Inline_Names[j]) {
            Instances_found = Instances_found + 1;
        }

        document.getElementById("instance_found_label").innerHTML = "Name found" + " " + Instances_found + " " + "time";
        console.log(Instances_found);
    }

}
