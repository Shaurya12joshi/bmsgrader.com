window.addEventListener('DOMContentLoaded',()=>{
    let cardCounter = 0;
    document.addEventListener('click',(e)=>{    
        if (!e.target.classList.contains('addSubject')){
            return;
        } 
        cardCounter ++;
        const {year,sem} = e.target.dataset;
        const container = document.querySelector(
            `.subjectContainer[data-year="${year}"][data-sem="${sem}"]`
        )
        console.log(document.getElementById(`.subjectContainer[data-year="${year}"][data-sem="${sem}"]`));
        const subjectDiv = document.createElement('div');
        subjectDiv.className = "bg-neutral-700 w-278 ml-2 rounded-2xl p-6 flex flex-col gap-6"

        subjectDiv.innerHTML = `
                    <div class="flex flex-row h-2">
                    <div class=" w-70 flex flex-row justify-between p-1 h-6 text-white">
                    <h3 class="font-bold">Subject</h3>
                    <div class="labDiv" id="labDiv">
                        <input type="checkbox" class="labCheckSem1Year1">
                        <label for="" class="text-white text-sm ">Has Lab</label>
                    </div>

                    <div class="ccadiv">
                        <input type="checkbox" class="ccaCheckYear1Sem1">
                        <label for="" class="text-white text-sm">Has CCA</label>
                    </div>
                    
                    </div>
                    <div class="text-white mt-1 ml-15"> 
                    <label for="" class="font-bold ">Credits</label> 
                    </div>
                    <div class=" ml-70 flex flex-row h-15 justify-between w-90 mt-2 text-white">
                        <div class="p-1 bg-cyan-700 rounded-lg w-12 text-center">
                            <p>GPA</p>
                            <label class="gpaSem1Year1">0.00</label>
                        </div>

                        <div class="p-1 bg-cyan-700 rounded-lg w-16 text-center">
                            <p>Total</p>
                            <label class="totalMarksLabel">0.0/100</label>
                        </div>

                        <div class="p-1 bg-cyan-700 rounded-lg w-25 text-sm text-center">
                            <p>Grade Score</p>
                            <label  class="text-lg gradeScoreSem1Year1">0</label>
                        </div>

                        <div class="p-1 bg-red-500 rounded-lg w-20 text-lg h-10 mt-2 text-center text-teal-50 hover:bg-red-700" id="deleteBtn">
                            <button>Delete</button>
                        </div>
                    </div>
                </div>
                <div class=" flex flex-row justify-between  w-128">
                    <select id="subject-select" name="subject" class="text-white bg-neutral-500
                    rounded-lg text-center h-10">
                    <option value="">Enter Subject Name</option>
                    <option value="Mathematics">Mathematics</option>
                    <option value="Physics">Physics</option>
                    <option value="Chemistry">Chemistry</option>
                    <option value="Computer Programming Languange">Computer Programming Languange</option>
                    <option value="Data Structures">Data Structures</option>
                    <option value="CAED">CAED</option>
                    <option value="Kannada">Kannada</option>
                    <option value="English">English</option>
                    <option value="Artificial Intelligence">Artificial Intelligence</option>
                    <option value="IDT">IDT</option>
                    <option value="DSA">DSA</option>
                    </select>

                    <input type="number" value="1" max="6" min="1" class="text-gray-500 bg-white rounded-lg text-center w-43 year1sem1Credits">
                </div>


                <div>
                    <div class="flex flex-row m-8 ml-0 justify-between">
                        <div class="flex flex-col">
                            <label for="" class="text-amber-50 text-center font-bold">IA1 /40</label>
                            <input type="number" max="40" min="0" value="0" class="bg-white w-25 h-7 rounded-md text-center ia1Year1Sem1">
                        </div>
                        <div class="flex flex-col">
                            <label for="" class="text-amber-50 text-center font-bold">IA2 /40</label>
                            <input type="number" max="40" min="0" value="0" class="bg-white w-25 h-7 rounded-md text-center ia2Year1Sem1">
                        </div>
                        <div class="flex flex-col"> 
                            <label for="" class="text-amber-50 text-center font-bold">IA3 /40</label>
                            <input type="number" max="40" min="0" value="0" class="bg-white w-25 h-7 rounded-md text-center ia3Year1Sem1">
                        </div>
                        <div class="flex flex-col">
                            <label for="" class="text-amber-50 text-center font-bold">ENDSEM /100</label>
                            <input type="number" max="100" min="0" value="0" class="bg-white w-25 h-7 rounded-md text-center endSemYear1Sem1">
                        </div>
                        <div class="flex flex-col">
                        <label for="" class="text-center text-amber-50 font-bold">IA Best-2</label>
                        <label for="" class="bg-white w-40 h-7 rounded-md text-center iaBest2">0 & 0 (sum 0/80)</label >
                        </div>
                    </div>    
                </div>

                <div class="flex flex-row items-start ">
                <div class="addSpaceSem1Year1"></div>
                
                    <div class="bg-white w-80 rounded-sm p-2 labYear1Sem1">
                        <div class="flex flex-row justify-between">
                          <label for="" class="font-bold">Lab</label>
                          
                        </div>
                        <div class="flex flex-row justify-between">
                        <div class="flex flex-col">
                            <label for="" class="text-gray-600">Record Marks</label>
                            <input type="number" max="15" min="0"id="" value="0" class="text-center border-1 border-gray-400 rounded-sm recordMarksSem1Year1">
                        </div>
                        
                        <div class="flex flex-col">
                            <label for="" class="text-gray-600">Lab Marks</label>
                            <input type="number" max="10" min="0"id="" value="0" class="text-center border-1 border-gray-400 rounded-sm labMarksSem1Year1">
                        </div>

                        </div>
                    </div>

                    <div class=" w-90 ">
                    <div class=" bg-white  rounded-sm ml-10 p-2  ccaYear1Sem1">
                        <div class="flex flex-row justify-between">
                          <label for="" class="text-center font-bold">CCA</label>
                          
                        </div>
                        <div class="flex flex-row justify-between">
                        <div class="flex flex-col w-30 text-center pr-10">
                            <label for="" class="text-gray-600">CCA-1</label>
                            <input type="number" max="10" min="0"id="" value="0" class=" text-center border-1 border-gray-400 rounded-sm cca1Sem1Year1">
                        </div>
                        
                        <div class="flex flex-col w-30 text-center pl-10">
                            <label for="" class="text-gray-600">CCA-2</label>
                            <input type="number" max="10" min="0"id="" value="0" class=" text-center border-1 w-20 border-gray-400 rounded-sm cca2Sem1Year1">
                        </div>

                        </div>
                        </div>
                    </div>


                    <div class="bg-white w-80 rounded-sm ml-10 p-2 pb-5">
                        <div class="flex flex-row justify-between">
                          <label for="" class="text-center font-bold">IA3 Recommendation</label>
                        </div>
                        <div class="text-sm text-gray-500 ia3RecommendationSem1Year1">
                            IA3 helps only if you can score > 1 (replaces your lower IA1/IA2).
                        </div>
                    </div>
                    
                </div>

                <div class=" mt-3 text-amber-50 text-sm">
                    Breakdown: IA scaled 15.0/30 • Lab scaled 0.0/25 • Asg scaled 0.0/20 • End scaled 0.0/50.

                </div>
                `;

                const year1sem1Credits = subjectDiv.querySelector(".year1sem1Credits")
                year1sem1Credits.id = `year1sem1Subject${cardCounter}`
            
                const year1sem1ia1 = subjectDiv.querySelector(".ia1Year1Sem1")
                year1sem1ia1.id = `year1sem1ia1Subject${cardCounter}`

                const year1sem1ia2 = subjectDiv.querySelector(".ia2Year1Sem1")
                year1sem1ia2.id = `year1sem1ia2Subject${cardCounter}`

                const year1sem1ia3 = subjectDiv.querySelector(".ia3Year1Sem1")
                year1sem1ia3.id = `year1sem1ia3Subject${cardCounter}`

                const year1sem1endSem = subjectDiv.querySelector(".endSemYear1Sem1")
                year1sem1endSem.id = `year1sem1endSemSubject${cardCounter}`

                const year1sem1TotalMarks = subjectDiv.querySelector(".totalMarksLabel")
                year1sem1TotalMarks.id = `year1sem1TotalMarksSubject${cardCounter}`

                const year1sem1IaBest2 = subjectDiv.querySelector(".iaBest2")
                year1sem1IaBest2.id = `year1sem1IaBest2Subject${cardCounter}`
                
                const labCheckSem1Year1 = subjectDiv.querySelector(".labCheckSem1Year1")
                labCheckSem1Year1.id = `labCheckSem1Year1Subject${cardCounter}`

                const ccaYear1Sem1 = subjectDiv.querySelector(".ccaYear1Sem1")
                ccaYear1Sem1.id = `ccaYear1Sem1Subject${cardCounter}`

                const ccaCheckYear1Sem1 = subjectDiv.querySelector(".ccaCheckYear1Sem1")
                ccaCheckYear1Sem1.id = `ccaCheckYear1Sem1Subject${cardCounter}`

                const labYear1Sem1 = subjectDiv.querySelector(".labYear1Sem1")
                labYear1Sem1.id = `labYear1Sem1Subject${cardCounter}`

                const addSpaceSem1Year1 = subjectDiv.querySelector(".addSpaceSem1Year1")
                addSpaceSem1Year1.id = `addSpaceSem1Year1Subject${cardCounter}`

                const recordMarksSem1Year1 = subjectDiv.querySelector(".recordMarksSem1Year1")
                recordMarksSem1Year1.id = `recordMarksSem1Year1Subject${cardCounter}`

                const labMarksSem1Year1 = subjectDiv.querySelector(".labMarksSem1Year1")
                labMarksSem1Year1.id = `labMarksSem1Year1Subject${cardCounter}`

                const cca1Sem1Year1 = subjectDiv.querySelector(".cca1Sem1Year1")
                cca1Sem1Year1.id = `cca1Sem1Year1Subject${cardCounter}`

                const cca2Sem1Year1 = subjectDiv.querySelector(".cca2Sem1Year1")
                cca2Sem1Year1.id = `cca2Sem1Year1Subject${cardCounter}`

                const ia3RecommendationSem1Year1 = subjectDiv.querySelector(".ia3RecommendationSem1Year1")
                ia3RecommendationSem1Year1.id = `ia3RecommendationSem1Year1Subject${cardCounter}`

                const gpaSem1Year1 = subjectDiv.querySelector(".gpaSem1Year1")
                gpaSem1Year1.id = `gpaSem1Year1Subject${cardCounter}`

                const ccadiv = subjectDiv.querySelector(".ccadiv")
                ccadiv.id = `ccaDivYear1Sem1Subject${cardCounter}`

                const labDiv = subjectDiv.querySelector(".labDiv")
                labDiv.id = `labDivYear1Sem1Subject${cardCounter}`

                const gradeScoreSem1Year1 = subjectDiv.querySelector(".gradeScoreSem1Year1")
                gradeScoreSem1Year1.id = `gradeScoreSem1Year1Subject${cardCounter}`

                labCheckSem1Year1.addEventListener('click',()=>{
                    if(labCheckSem1Year1.checked){
                        ccaYear1Sem1.classList.add("hidden")
                        ccadiv.classList.add("hidden")
                } 
                else{
                    ccaYear1Sem1.classList.remove("hidden")
                    ccadiv.classList.remove("hidden")
                }
                })
                                           
                ccaCheckYear1Sem1.addEventListener('click',()=>{
                    if(ccaCheckYear1Sem1.checked){
                    labYear1Sem1.classList.add("hidden")
                    addSpaceSem1Year1.classList.add("w-40")
                    labDiv.classList.add("hidden")
                } 
                else{
                    labYear1Sem1.classList.remove("hidden")
                    addSpaceSem1Year1.classList.remove("w-40")
                    labDiv.classList.remove("hidden")
                }
                })

                container.appendChild(subjectDiv);

                [year1sem1ia1, year1sem1ia2, year1sem1ia3, year1sem1endSem, recordMarksSem1Year1, labMarksSem1Year1, cca1Sem1Year1, cca2Sem1Year1, gpaSem1Year1].forEach(input =>{
                    input.addEventListener("input",()=>{
                        const maxia = 40;
                        const maxend = 100;
                        const recordMarks = 15;
                        const labMarks = 10;
                        const ccaMarks = 10;
                        if (year1sem1ia1.value > maxia){
                            year1sem1ia1.value = maxia
                        }
                        if (year1sem1ia2.value > maxia){
                            year1sem1ia2.value = maxia
                        }
                        if (year1sem1ia3.value > maxia){
                            year1sem1ia3.value = maxia
                        }
                        if (year1sem1endSem.value > maxend){
                            year1sem1endSem.value = maxend
                        }
                        if (recordMarksSem1Year1.value > recordMarks){
                            recordMarksSem1Year1.value = recordMarks
                        }
                        if (labMarksSem1Year1.value > labMarks){
                            labMarksSem1Year1.value = labMarks
                        }
                        if (cca1Sem1Year1.value > ccaMarks){
                            cca1Sem1Year1.value = ccaMarks
                        }
                        if (cca2Sem1Year1.value > ccaMarks){
                            cca2Sem1Year1.value = ccaMarks
                        }
                        



                        if(labCheckSem1Year1.checked){
                            const labFinalMarksSem1Year1 = parseInt(recordMarksSem1Year1.value,10)+parseInt(labMarksSem1Year1.value,10)
                        if(parseInt(year1sem1ia1.value,10)<parseInt(year1sem1ia3.value,10) && parseInt(year1sem1ia1.value,10)<parseInt(year1sem1ia2.value,10)  ){
                            let marksYear1Sem1IA = (parseInt(year1sem1ia2.value , 10)) + (parseInt(year1sem1ia3.value , 10))
                            let marksyear1sem1 =  ((parseInt(year1sem1ia2.value,10) + parseInt(year1sem1ia3.value,10))/80)*25 + ((parseInt(year1sem1endSem.value,10))/2)+labFinalMarksSem1Year1;
                            year1sem1TotalMarks.textContent = Math.round(marksyear1sem1.toFixed(0));
                            year1sem1IaBest2.textContent = `${year1sem1ia2.value} & ${year1sem1ia3.value} (sum ${marksYear1Sem1IA} /80)`
                            ia3RecommendationSem1Year1.innerHTML=`IA3 helps only if you can score greater than ${year1sem1ia1.value} (replaces your IA1).`
                            if(marksyear1sem1>=0 && marksyear1sem1<=39){
                                const gpa =  parseInt(year1sem1Credits.value,10) * 0 / parseInt(year1sem1Credits.value,10)
                                gpaSem1Year1.textContent = gpa
                                gradeScoreSem1Year1.textContent = "0"
                                console.log(gpa)
                            }
                            else if(marksyear1sem1>=40 && marksyear1sem1<=49){
                                const gpa =  parseInt(year1sem1Credits.value,10) * 4 / parseInt(year1sem1Credits.value,10)
                                gpaSem1Year1.textContent = gpa
                                gradeScoreSem1Year1.textContent = "4"
                                console.log(gpa)
                            }
                            else if(marksyear1sem1>=50 && marksyear1sem1<=54){
                                const gpa =  parseInt(year1sem1Credits.value,10) * 5 / parseInt(year1sem1Credits.value,10)
                                gpaSem1Year1.textContent = gpa
                                gradeScoreSem1Year1.textContent = "5"
                                console.log(gpa)
                            }
                            else if(marksyear1sem1>=55 && marksyear1sem1<=59){
                                const gpa =  parseInt(year1sem1Credits.value,10) * 6 / parseInt(year1sem1Credits.value,10)
                                gpaSem1Year1.textContent = gpa
                                gradeScoreSem1Year1.textContent = "6"
                                console.log(gpa)
                            }
                            else if(marksyear1sem1>=60 && marksyear1sem1<=69){
                                const gpa =  parseInt(year1sem1Credits.value,10) * 7 / parseInt(year1sem1Credits.value,10)
                                gpaSem1Year1.textContent = gpa
                                gradeScoreSem1Year1.textContent = "7"
                                console.log(gpa)
                            }
                            else if(marksyear1sem1>=70 && marksyear1sem1<=79){
                                const gpa =  parseInt(year1sem1Credits.value,10) * 8 / parseInt(year1sem1Credits.value,10)
                                gpaSem1Year1.textContent = gpa
                                gradeScoreSem1Year1.textContent = "8"
                                console.log(gpa)
                            }
                            else if(marksyear1sem1>=80 && marksyear1sem1<=89){
                                const gpa =  parseInt(year1sem1Credits.value,10) * 9 / parseInt(year1sem1Credits.value,10)
                                gpaSem1Year1.textContent = gpa
                                gradeScoreSem1Year1.textContent = "9"
                                console.log(gpa)
                            }
                            else if(marksyear1sem1>=90 && marksyear1sem1<=100){
                                const gpa =  parseInt(year1sem1Credits.value,10) * 10 / parseInt(year1sem1Credits.value,10)
                                gpaSem1Year1.textContent = gpa
                                gradeScoreSem1Year1.textContent = "10"
                                console.log(gpa)
                            }
                    }
                        else if(parseInt(year1sem1ia2.value,10)<parseInt(year1sem1ia3.value,10) && parseInt(year1sem1ia2.value,10)<parseInt(year1sem1ia1.value,10) ){
                            let marksYear1Sem1IA = (parseInt(year1sem1ia1.value , 10)) + (parseInt(year1sem1ia3.value , 10))
                            let marksyear1sem1 =  ((parseInt(year1sem1ia1.value,10) + parseInt(year1sem1ia3.value,10))/80)*25 + ((parseInt(year1sem1endSem.value,10))/2)+labFinalMarksSem1Year1;
                            year1sem1TotalMarks.textContent = Math.round(marksyear1sem1.toFixed(0));
                            year1sem1IaBest2.textContent = `${year1sem1ia1.value} & ${year1sem1ia3.value} (sum ${marksYear1Sem1IA} /80)`
                            ia3RecommendationSem1Year1.innerHTML=`IA3 helps only if you can score greater than ${year1sem1ia2.value} (replaces your IA2).`
                            if(marksyear1sem1>=0 && marksyear1sem1<=39){
                                const gpa =  parseInt(year1sem1Credits.value,10) * 0 / parseInt(year1sem1Credits.value,10)
                                gpaSem1Year1.textContent = gpa
                                gradeScoreSem1Year1.textContent = "0"
                                console.log(gpa)
                            }
                            else if(marksyear1sem1>=40 && marksyear1sem1<=49){
                                const gpa =  parseInt(year1sem1Credits.value,10) * 4 / parseInt(year1sem1Credits.value,10)
                                gpaSem1Year1.textContent = gpa
                                gradeScoreSem1Year1.textContent = "4"
                                console.log(gpa)
                            }
                            else if(marksyear1sem1>=50 && marksyear1sem1<=54){
                                const gpa =  parseInt(year1sem1Credits.value,10) * 5 / parseInt(year1sem1Credits.value,10)
                                gpaSem1Year1.textContent = gpa
                                gradeScoreSem1Year1.textContent = "5"
                                console.log(gpa)
                            }
                            else if(marksyear1sem1>=55 && marksyear1sem1<=59){
                                const gpa =  parseInt(year1sem1Credits.value,10) * 6 / parseInt(year1sem1Credits.value,10)
                                gpaSem1Year1.textContent = gpa
                                gradeScoreSem1Year1.textContent = "6"
                                console.log(gpa)
                            }
                            else if(marksyear1sem1>=60 && marksyear1sem1<=69){
                                const gpa =  parseInt(year1sem1Credits.value,10) * 7 / parseInt(year1sem1Credits.value,10)
                                gpaSem1Year1.textContent = gpa
                                gradeScoreSem1Year1.textContent = "7"
                                console.log(gpa)
                            }
                            else if(marksyear1sem1>=70 && marksyear1sem1<=79){
                                const gpa =  parseInt(year1sem1Credits.value,10) * 8 / parseInt(year1sem1Credits.value,10)
                                gpaSem1Year1.textContent = gpa
                                gradeScoreSem1Year1.textContent = "8"
                                console.log(gpa)
                            }
                            else if(marksyear1sem1>=80 && marksyear1sem1<=89){
                                const gpa =  parseInt(year1sem1Credits.value,10) * 9 / parseInt(year1sem1Credits.value,10)
                                gpaSem1Year1.textContent = gpa
                                gradeScoreSem1Year1.textContent = "9"
                                console.log(gpa)
                            }
                            else if(marksyear1sem1>=90 && marksyear1sem1<=100){
                                const gpa =  parseInt(year1sem1Credits.value,10) * 10 / parseInt(year1sem1Credits.value,10)
                                gpaSem1Year1.textContent = gpa
                                gradeScoreSem1Year1.textContent = "10"
                                console.log(gpa)
                            }
                        }
                        else{
                            let marksYear1Sem1IA = (parseInt(year1sem1ia1.value , 10)) + (parseInt(year1sem1ia2.value , 10))
                            let marksyear1sem1 =  ((parseInt(year1sem1ia1.value,10) + parseInt(year1sem1ia2.value,10))/80)*25 + ((parseInt(year1sem1endSem.value,10))/2)+labFinalMarksSem1Year1;
                            year1sem1TotalMarks.textContent = Math.round(marksyear1sem1.toFixed(0));
                            year1sem1IaBest2.textContent = `${year1sem1ia1.value} & ${year1sem1ia2.value} (sum ${marksYear1Sem1IA} /80)`
                            ia3RecommendationSem1Year1.innerHTML=`No need to attempt IA3 examination.`
                            if(marksyear1sem1>=0 && marksyear1sem1<=39){
                                const gpa =  parseInt(year1sem1Credits.value,10) * 0 / parseInt(year1sem1Credits.value,10)
                                gpaSem1Year1.textContent = gpa
                                gradeScoreSem1Year1.textContent = "0"
                                console.log(gpa)
                            }
                            else if(marksyear1sem1>=40 && marksyear1sem1<=49){
                                const gpa =  parseInt(year1sem1Credits.value,10) * 4 / parseInt(year1sem1Credits.value,10)
                                gpaSem1Year1.textContent = gpa
                                gradeScoreSem1Year1.textContent = "4"
                                console.log(gpa)
                            }
                            else if(marksyear1sem1>=50 && marksyear1sem1<=54){
                                const gpa =  parseInt(year1sem1Credits.value,10) * 5 / parseInt(year1sem1Credits.value,10)
                                gpaSem1Year1.textContent = gpa
                                gradeScoreSem1Year1.textContent = "5"
                                console.log(gpa)
                            }
                            else if(marksyear1sem1>=55 && marksyear1sem1<=59){
                                const gpa =  parseInt(year1sem1Credits.value,10) * 6 / parseInt(year1sem1Credits.value,10)
                                gpaSem1Year1.textContent = gpa
                                gradeScoreSem1Year1.textContent = "6"
                                console.log(gpa)
                            }
                            else if(marksyear1sem1>=60 && marksyear1sem1<=69){
                                const gpa =  parseInt(year1sem1Credits.value,10) * 7 / parseInt(year1sem1Credits.value,10)
                                gpaSem1Year1.textContent = gpa
                                gradeScoreSem1Year1.textContent = "7"
                                console.log(gpa)
                            }
                            else if(marksyear1sem1>=70 && marksyear1sem1<=79){
                                const gpa =  parseInt(year1sem1Credits.value,10) * 8 / parseInt(year1sem1Credits.value,10)
                                gpaSem1Year1.textContent = gpa
                                gradeScoreSem1Year1.textContent = "8"
                                console.log(gpa)
                            }
                            else if(marksyear1sem1>=80 && marksyear1sem1<=89){
                                const gpa =  parseInt(year1sem1Credits.value,10) * 9 / parseInt(year1sem1Credits.value,10)
                                gpaSem1Year1.textContent = gpa
                                gradeScoreSem1Year1.textContent = "9"
                                console.log(gpa)
                            }
                            else if(marksyear1sem1>=90 && marksyear1sem1<=100){
                                const gpa =  parseInt(year1sem1Credits.value,10) * 10 / parseInt(year1sem1Credits.value,10)
                                gpaSem1Year1.textContent = gpa
                                gradeScoreSem1Year1.textContent = "10"
                                console.log(gpa)
                            }


                        }
                    }


                    if(ccaCheckYear1Sem1.checked){
                            const ccaFinalMarksSem1Year1 = parseInt(cca1Sem1Year1.value,10)+parseInt(cca2Sem1Year1.value,10)
                        if(parseInt(year1sem1ia1.value,10)<parseInt(year1sem1ia3.value,10) && parseInt(year1sem1ia1.value,10)< parseInt(year1sem1ia2.value,10)  ){
                            let marksYear1Sem1IA = (parseInt(year1sem1ia2.value , 10)) + (parseInt(year1sem1ia3.value , 10))
                            let marksyear1sem1 =  ((parseInt(year1sem1ia2.value,10) + parseInt(year1sem1ia3.value,10))/80)*30 + ((parseInt(year1sem1endSem.value,10))/2)+ccaFinalMarksSem1Year1;
                            year1sem1TotalMarks.textContent = marksyear1sem1.toFixed(2);
                            year1sem1IaBest2.textContent = `${year1sem1ia2.value} & ${year1sem1ia3.value} (sum ${marksYear1Sem1IA} /80)`
                            ia3RecommendationSem1Year1.innerHTML=`IA3 helps only if you can score greater than ${year1sem1ia1.value} (replaces your IA1).`
                            if(marksyear1sem1>=0 && marksyear1sem1<=39){
                                const gpa =  parseInt(year1sem1Credits.value,10) * 0 / parseInt(year1sem1Credits.value,10)
                                gpaSem1Year1.textContent = gpa
                                gradeScoreSem1Year1.textContent = "0"
                                console.log(gpa)
                            }
                            else if(marksyear1sem1>=40 && marksyear1sem1<=49){
                                const gpa =  parseInt(year1sem1Credits.value,10) * 4 / parseInt(year1sem1Credits.value,10)
                                gpaSem1Year1.textContent = gpa
                                gradeScoreSem1Year1.textContent = "4"
                                console.log(gpa)
                            }
                            else if(marksyear1sem1>=50 && marksyear1sem1<=54){
                                const gpa =  parseInt(year1sem1Credits.value,10) * 5 / parseInt(year1sem1Credits.value,10)
                                gpaSem1Year1.textContent = gpa
                                gradeScoreSem1Year1.textContent = "5"
                                console.log(gpa)
                            }
                            else if(marksyear1sem1>=55 && marksyear1sem1<=59){
                                const gpa =  parseInt(year1sem1Credits.value,10) * 6 / parseInt(year1sem1Credits.value,10)
                                gpaSem1Year1.textContent = gpa
                                gradeScoreSem1Year1.textContent = "6"
                                console.log(gpa)
                            }
                            else if(marksyear1sem1>=60 && marksyear1sem1<=69){
                                const gpa =  parseInt(year1sem1Credits.value,10) * 7 / parseInt(year1sem1Credits.value,10)
                                gpaSem1Year1.textContent = gpa
                                gradeScoreSem1Year1.textContent = "7"
                                console.log(gpa)
                            }
                            else if(marksyear1sem1>=70 && marksyear1sem1<=79){
                                const gpa =  parseInt(year1sem1Credits.value,10) * 8 / parseInt(year1sem1Credits.value,10)
                                gpaSem1Year1.textContent = gpa
                                gradeScoreSem1Year1.textContent = "8"
                                console.log(gpa)
                            }
                            else if(marksyear1sem1>=80 && marksyear1sem1<=89){
                                const gpa =  parseInt(year1sem1Credits.value,10) * 9 / parseInt(year1sem1Credits.value,10)
                                gpaSem1Year1.textContent = gpa
                                gradeScoreSem1Year1.textContent = "9"
                                console.log(gpa)
                            }
                            else if(marksyear1sem1>=90 && marksyear1sem1<=100){
                                const gpa =  parseInt(year1sem1Credits.value,10) * 10 / parseInt(year1sem1Credits.value,10)
                                gpaSem1Year1.textContent = gpa
                                gradeScoreSem1Year1.textContent = "10"
                                console.log(gpa)
                            }

                        }

                        else if(parseInt(year1sem1ia2.value,10)<parseInt(year1sem1ia3.value,10) && parseInt(year1sem1ia2.value,10)< parseInt(year1sem1ia1.value,10) ){
                            let marksYear1Sem1IA = (parseInt(year1sem1ia1.value , 10)) + (parseInt(year1sem1ia3.value , 10))
                            let marksyear1sem1 =  ((parseInt(year1sem1ia1.value,10) + parseInt(year1sem1ia3.value,10))/80)*30 + ((parseInt(year1sem1endSem.value,10))/2)+ccaFinalMarksSem1Year1;
                            year1sem1TotalMarks.textContent = marksyear1sem1.toFixed(2);
                            year1sem1IaBest2.textContent = `${year1sem1ia1.value} & ${year1sem1ia3.value} (sum ${marksYear1Sem1IA} /80)`
                            ia3RecommendationSem1Year1.innerHTML=`IA3 helps only if you can score greater than ${year1sem1ia2.value} (replaces your IA2).`
                            if(marksyear1sem1>=0 && marksyear1sem1<=39){
                                const gpa =  parseInt(year1sem1Credits.value,10) * 0 / parseInt(year1sem1Credits.value,10)
                                gpaSem1Year1.textContent = gpa
                                gradeScoreSem1Year1.textContent = "0"
                                console.log(gpa)
                            }
                            else if(marksyear1sem1>=40 && marksyear1sem1<=49){
                                const gpa =  parseInt(year1sem1Credits.value,10) * 4 / parseInt(year1sem1Credits.value,10)
                                gpaSem1Year1.textContent = gpa
                                gradeScoreSem1Year1.textContent = "4"
                                console.log(gpa)
                            }
                            else if(marksyear1sem1>=50 && marksyear1sem1<=54){
                                const gpa =  parseInt(year1sem1Credits.value,10) * 5 / parseInt(year1sem1Credits.value,10)
                                gpaSem1Year1.textContent = gpa
                                gradeScoreSem1Year1.textContent = "5"
                                console.log(gpa)
                            }
                            else if(marksyear1sem1>=55 && marksyear1sem1<=59){
                                const gpa =  parseInt(year1sem1Credits.value,10) * 6 / parseInt(year1sem1Credits.value,10)
                                gpaSem1Year1.textContent = gpa
                                gradeScoreSem1Year1.textContent = "6"
                                console.log(gpa)
                            }
                            else if(marksyear1sem1>=60 && marksyear1sem1<=69){
                                const gpa =  parseInt(year1sem1Credits.value,10) * 7 / parseInt(year1sem1Credits.value,10)
                                gpaSem1Year1.textContent = gpa
                                gradeScoreSem1Year1.textContent = "7"
                                console.log(gpa)
                            }
                            else if(marksyear1sem1>=70 && marksyear1sem1<=79){
                                const gpa =  parseInt(year1sem1Credits.value,10) * 8 / parseInt(year1sem1Credits.value,10)
                                gpaSem1Year1.textContent = gpa
                                gradeScoreSem1Year1.textContent = "8"
                                console.log(gpa)
                            }
                            else if(marksyear1sem1>=80 && marksyear1sem1<=89){
                                const gpa =  parseInt(year1sem1Credits.value,10) * 9 / parseInt(year1sem1Credits.value,10)
                                gpaSem1Year1.textContent = gpa
                                gradeScoreSem1Year1.textContent = "9"
                                console.log(gpa)
                            }
                            else if(marksyear1sem1>=90 && marksyear1sem1<=100){
                                const gpa =  parseInt(year1sem1Credits.value,10) * 10 / parseInt(year1sem1Credits.value,10)
                                gpaSem1Year1.textContent = gpa
                                gradeScoreSem1Year1.textContent = "10"
                                console.log(gpa)
                            }

                        }
                        else{
                            let marksYear1Sem1IA = (parseInt(year1sem1ia1.value , 10)) + (parseInt(year1sem1ia2.value , 10))
                            let marksyear1sem1 =  ((parseInt(year1sem1ia1.value,10) + parseInt(year1sem1ia2.value,10))/80)*30 + ((parseInt(year1sem1endSem.value,10))/2)+ccaFinalMarksSem1Year1;
                            year1sem1TotalMarks.textContent = marksyear1sem1.toFixed(2);
                            year1sem1IaBest2.textContent = `${year1sem1ia1.value} & ${year1sem1ia2.value} (sum ${marksYear1Sem1IA} /80)`
                            ia3RecommendationSem1Year1.innerHTML=`No need to attempt IA3 examination. You have already Bombed in IA1 and IA2`
                            if(marksyear1sem1>=0 && marksyear1sem1<=39){
                                const gpa =  parseInt(year1sem1Credits.value,10) * 0 / parseInt(year1sem1Credits.value,10)
                                gpaSem1Year1.textContent = gpa
                                gradeScoreSem1Year1.textContent = "0"
                                console.log(gpa)
                            }
                            else if(marksyear1sem1>=40 && marksyear1sem1<=49){
                                const gpa =  parseInt(year1sem1Credits.value,10) * 4 / parseInt(year1sem1Credits.value,10)
                                gpaSem1Year1.textContent = gpa
                                gradeScoreSem1Year1.textContent = "4"
                                console.log(gpa)
                            }
                            else if(marksyear1sem1>=50 && marksyear1sem1<=54){
                                const gpa =  parseInt(year1sem1Credits.value,10) * 5 / parseInt(year1sem1Credits.value,10)
                                gpaSem1Year1.textContent = gpa
                                gradeScoreSem1Year1.textContent = "5"
                                console.log(gpa)
                            }
                            else if(marksyear1sem1>=55 && marksyear1sem1<=59){
                                const gpa =  parseInt(year1sem1Credits.value,10) * 6 / parseInt(year1sem1Credits.value,10)
                                gpaSem1Year1.textContent = gpa
                                gradeScoreSem1Year1.textContent = "6"
                                console.log(gpa)
                            }
                            else if(marksyear1sem1>=60 && marksyear1sem1<=69){
                                const gpa =  parseInt(year1sem1Credits.value,10) * 7 / parseInt(year1sem1Credits.value,10)
                                gpaSem1Year1.textContent = gpa
                                gradeScoreSem1Year1.textContent = "7"
                                console.log(gpa)
                            }
                            else if(marksyear1sem1>=70 && marksyear1sem1<=79){
                                const gpa =  parseInt(year1sem1Credits.value,10) * 8 / parseInt(year1sem1Credits.value,10)
                                gpaSem1Year1.textContent = gpa
                                gradeScoreSem1Year1.textContent = "8"
                                console.log(gpa)
                            }
                            else if(marksyear1sem1>=80 && marksyear1sem1<=89){
                                const gpa =  parseInt(year1sem1Credits.value,10) * 9 / parseInt(year1sem1Credits.value,10)
                                gpaSem1Year1.textContent = gpa
                                gradeScoreSem1Year1.textContent = "9"
                                console.log(gpa)
                            }
                            else if(marksyear1sem1>=90 && marksyear1sem1<=100){
                                const gpa =  parseInt(year1sem1Credits.value,10) * 10 / parseInt(year1sem1Credits.value,10)
                                gpaSem1Year1.textContent = gpa
                                gradeScoreSem1Year1.textContent = "10"
                                console.log(gpa)
                            }

                        }
                    }

                    calculateAllGPAs();




                    })
                
                })
                const deleteBtn = subjectDiv.querySelector('#deleteBtn');
                deleteBtn.addEventListener('click',()=>{
                    subjectDiv.remove();
                });

                



    });

    document.getElementById('reset').addEventListener('click', () => {
  if (confirm('Are you sure you want to reset? The data will be lost.')) {
    location.reload();
  }
});

function calculateCGPA() {

    const creditInputs = document.querySelectorAll(".year1sem1Credits");
    const gradeLabels = document.querySelectorAll(".gradeScoreSem1Year1");

    let totalCredits = 0;
    let totalGradePoints = 0;

    creditInputs.forEach((creditInput, index) => {

        const credits = parseFloat(creditInput.value) || 0;
        const grade = parseFloat(gradeLabels[index].textContent) || 0;

        totalCredits += credits;
        totalGradePoints += credits * grade;

    });

    const cgpa = totalCredits === 0 ? 0 : totalGradePoints / totalCredits;

    const cgpaLabel = document.getElementById("overallCGPA");

    if (cgpaLabel) {
        cgpaLabel.textContent = cgpa.toFixed(2);
    }
}
function calculateAllGPAs() {
    calculateOverallCGPA();
    calculateYearCGPA();
    calculateSemesterSGPA();
}

function calculateOverallCGPA() {
    const creditInputs = document.querySelectorAll("[class*='Credits']");
    const gradeLabels = document.querySelectorAll("[class*='gradeScore']");

    let totalCredits = 0;
    let totalGradePoints = 0;

    creditInputs.forEach((creditInput, index) => {
        const credits = parseFloat(creditInput.value) || 0;
        const grade = parseFloat(gradeLabels[index]?.textContent) || 0;
        totalCredits += credits;
        totalGradePoints += credits * grade;
    });

    const cgpa = totalCredits === 0 ? 0 : totalGradePoints / totalCredits;
    const cgpaLabel = document.getElementById("overallCGPA");
    if (cgpaLabel) cgpaLabel.textContent = cgpa.toFixed(2);
}

function calculateYearCGPA() {
    const containers = document.querySelectorAll(".subjectContainer");
    const yearMap = {};

    containers.forEach(container => {
        const year = container.dataset.year;
        const creditInputs = container.querySelectorAll("[class*='Credits']");
        const gradeLabels = container.querySelectorAll("[class*='gradeScore']");

        creditInputs.forEach((creditInput, index) => {
            const credits = parseFloat(creditInput.value) || 0;
            const grade = parseFloat(gradeLabels[index]?.textContent) || 0;

            if (!yearMap[year]) yearMap[year] = { credits: 0, gradePoints: 0 };

            yearMap[year].credits += credits;
            yearMap[year].gradePoints += credits * grade;
        });
    });

    Object.keys(yearMap).forEach(year => {
        const { credits, gradePoints } = yearMap[year];
        const cgpa = credits === 0 ? 0 : gradePoints / credits;
        const label = document.getElementById(`year${year}CGPA`);
        if (label) label.textContent = cgpa.toFixed(2);
    });
}

function calculateSemesterSGPA() {
    const containers = document.querySelectorAll(".subjectContainer");
    const semMap = {};

    containers.forEach(container => {
        const year = container.dataset.year;
        const sem = container.dataset.sem;
        const key = `${year}-${sem}`;

        const creditInputs = container.querySelectorAll("[class*='Credits']");
        const gradeLabels = container.querySelectorAll("[class*='gradeScore']");

        creditInputs.forEach((creditInput, index) => {
            const credits = parseFloat(creditInput.value) || 0;
            const grade = parseFloat(gradeLabels[index]?.textContent) || 0;

            if (!semMap[key]) semMap[key] = { credits: 0, gradePoints: 0 };

            semMap[key].credits += credits;
            semMap[key].gradePoints += credits * grade;
        });
    });

    Object.keys(semMap).forEach(key => {
        const [year, sem] = key.split("-");
        const { credits, gradePoints } = semMap[key];
        const sgpa = credits === 0 ? 0 : gradePoints / credits;

        const label = document.getElementById(`year${year}sem${sem}SGPA`);
        if (label) label.textContent = sgpa.toFixed(2);
    });
}
})

    
