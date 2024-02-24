Table class {
    session_joining_link integer
    session_topic_name integer
    session_timing timestamp 
    contents varchar
    pre_read varchar
    activities text
  }
  
  Table dashboard {
    activities varchar
    codekata varchar
    graph_of_codekata integer
    webkata varchar
    graph_of_webkata integer
    submitted_tasks varchar
    pending_tasks varchar
    graph_for_tasks integer
  }
  
  Table tasks {
    user_name varchar [primary key]
    batch_name varchar
    task_number text 
    submitted_date varchar
    marks varchar
  }
  
  Table queries {
    create_query integer
    query_title varchar
    query_department varchar
    query_stage bool
    query_date_time timestamp
  }
  
  Table leaderboard {
    quote text
    rank integer
    user_name varchar [primary key]
    batch_name varchar
    learning_score integer
  }
  
  Table mock_interview {
    mock_interview_round varchar
    interview_date integer
    overall_score integer
    recording_url text
    comments varchar
    action varchar
  }


  
  Ref: tasks.user_name > leaderboard.user_name
  
  Ref: tasks.batch_name > leaderboard.batch_name
  
  Ref: class.session_joining_link > leaderboard.user_name
  
  Ref: dashboard.activities > leaderboard.user_name
  
  Ref: queries.create_query > leaderboard.user_name
  
  Ref: mock_interview.mock_interview_round > leaderboard.user_name