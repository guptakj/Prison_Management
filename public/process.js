$(document).ready(function(){
				$('#login2').click(function()
				{
					$('#login').toggle(1);
					$('#signup').hide();
                    $('#b1').show();
                    $('#b2').hide();
					});

			$('#signup2').click(function()
				{
					$('#signup').toggle(1);
					$('#login').hide();
                    $('#b2').show();
                    $('#b1').hide();
				});

            $('#login1').click(function(){
                var username=$('#name').val();
                var password=$('#password').val();
            
                    window.location.href="home.html";


            });

            $('#signup1').click(function(){
                var email=$('#email').val();
                var username=$('#name').val();
                var password1=$('#password1').val();
                var password2=$('#password2').val();
                alert(email+" "+username+" "+password1+" "+password2);
            });

				$('#logout').click(function(){
					console.log('kill');
					window.location.href="index.html";
				});

				/// ADD DATA TO MONGODB
				///CASE-REGISTER
				$('#caseregister').on('submit',function(e){
					e.preventDefault();
					console.log('submitted');
					var id=$('input[name="id"]').val();
					var name=$('input[name="name"]').val();
					var duration=$('input[name="duration"]').val();
					var conviction_details=$('input[name="conviction_details"]').val();

					$.ajax({ type:"POST", 
						url:"/api/add_case_details",
						data:JSON.stringify({"id":id,
							"name":name,
							"duration":duration,
							"conviction_details":conviction_details}),
						contentType:"application/json",
						success:function(data){
							window.location.href="caseRegister.html";
						},
						error:function(xhr,status,err){
							console.log(err);
						}


					});
				});

				//CRIMNAL REGISTER

				$('#criminalregister').on('submit',function(e){
					e.preventDefault();
					console.log('submitted');
					var id=$('input[name="id"]').val();
					var name=$('input[name="name"]').val();
					var crime_details=$('input[name="crime_details"]').val();
					var age=$('input[name="age"]').val();
					var address=$('input[name="address"]').val();
					var gender=$('input[name="gender"]').val();
					var nationality=$('input[name="nationality"]').val();
					var occupation=$('input[name="occupation"]').val();
					var photo=$('input[name="photo"]').val();
					var office_in_charge=$('input[name="office_in_charge"]').val();
					var articles=$('input[name="articles"]').val();

					$.ajax({ type:"POST", 
						url:"/api/add_criminal_info",
						data:JSON.stringify({"id":id,
							"name":name,
							"crime_details":crime_details,
							"age":age,
							"address":address,
							"gender":gender,
							"nationality":nationality,
							"occupation":occupation,
							"photo":photo,
							"office_in_charge":office_in_charge,
							"articles":articles
							}),
						contentType:"application/json",
						success:function(data){
							window.location.href="criminalRegister.html";
						},
						error:function(xhr,status,err){
							console.log(err);
						}


					});
				});

				//DIARY REGISTER

				
				$('#diaryregister').on('submit',function(e){
					e.preventDefault();
					console.log('submitted');
					var id=$('input[name="id"]').val();
					var name=$('input[name="name"]').val();
					var sentence_begin=$('input[name="sentence_begin"]').val();
					var sentence_end=$('input[name="sentence_end"]').val();

					$.ajax({ type:"POST", 
						url:"/api/diary_register",
						data:JSON.stringify({"id":id,
							"name":name,
							"sentence_begin":sentence_begin,
							"sentence_end":sentence_end
							
							}),
						contentType:"application/json",
						success:function(data){
							window.location.href="diaryRegister.html";
						},
						error:function(xhr,status,err){
							console.log(err);
						}


					});
				});				


				//DUTY REGISTER


				$('#dutyregister').on('submit',function(e){
					e.preventDefault();
					console.log('submitted');
					var id=$('input[name="id"]').val();
					var name=$('input[name="name"]').val();
					var department_id=$('input[name="department_id"]').val();
					var department_name=$('input[name="department_name"]').val();
					var shift=$('input[name="shift]').val();
					

					$.ajax({ type:"POST", 
						url:"/api/duty_register",
						data:JSON.stringify({"id":id,
							"name":name,
							"department_id":department_id,
							"department_name":department_name,
							"shift":shift
							
							}),
						contentType:"application/json",
						success:function(data){
							window.location.href="dutyRegister.html";
						},
						error:function(xhr,status,err){
							console.log(err);
						}


					});
				});	


				//IN OUT REGISTER
					

				$('#inoutregister').on('submit',function(e){
					e.preventDefault();
					console.log('submitted');
					var visitor_type=$('input[name="visitor_type"]').val();
					var visitor_id=$('input[name="visitor_id"]').val();
					var visitor_name=$('input[name="visitor_name"]').val();
					var date_in=$('input[name="date_in"]').val();
					var date_out=$('input[name="date_out"]').val();
					var time_in=$('input[name="time_in"]').val();
					var time_out=$('input[name="time_out"]').val();
					var place=$('input[name="place"]').val();

					$.ajax({ type:"POST", 
						url:"/api/add_in_out_register",
						data:JSON.stringify({
						"visitor_type":visitor_type,
						"visitor_id":visitor_id,
						"visitor_name":visitor_name,
						"date_in":date_in,
						"date_out":date_out,
						"time_in":time_in,
						"time_out":time_out,
						"place":place	
							}),
						contentType:"application/json",
						success:function(data){
							window.location.href="inOutRegister.html";
						},
						error:function(xhr,status,err){
							console.log(err);
						}


					});
				});

				//INTERVIEW REGISTER


				$('#interviewregister').on('submit',function(e){
					e.preventDefault();
					console.log('submitted');
					var id=$('input[name="id"]').val();
					var name=$('input[name="name"]').val();
					var relation=$('input[name="relation"]').val();
					var duration=$('input[name="duration"]').val();
					var time_start=$('input[name="time_start"]').val();
					var time_end=$('input[name="time_end"]').val();
					var date1=$('input[name="date1"]').val();

					$.ajax({ type:"POST", 
						url:"/api/interview_register",
						data:JSON.stringify({
							"id":id,
							"name":name,
							"relation":relation,
							"duration":duration,
							"time_start":time_start,
							"time_end":time_end,
							"date1":date1
							}),
						contentType:"application/json",
						success:function(data){
							window.location.href="interviewRegister.html";
						},
						error:function(xhr,status,err){
							console.log(err);
						}


					});
				});		


				// PAROLE REGISTER


				$('#paroleregister').on('submit',function(e){
					e.preventDefault();
					console.log('submitted');
					var id=$('input[name="id"]').val();
					var name=$('input[name="name"]').val();
					var address=$('input[name="address"]').val();
					var reason=$('input[name="reason"]').val();
					var sentence=$('input[name="sentence"]').val();
					var office_in_charge=$('input[name="office_in_charge"]').val();
					

					$.ajax({ type:"POST", 
						url:"/api/add_parole_info",
						data:JSON.stringify({
							"id":id,
							"name":name,
							"address":address,
							"reason":reason,
							"sentence":sentence,
							"office_in_charge":office_in_charge
							}),
						contentType:"application/json",
						success:function(data){
							window.location.href="paroleRegister.html";
						},
						error:function(xhr,status,err){
							console.log(err);
						}


					});
				});		

			});