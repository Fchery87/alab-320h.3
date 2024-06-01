function CreateLearner({ addLearner }) {
    
    const newLearner =   {
        name: 'Frantz Chery',
        bio: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus placeat nostrum explicabo? Voluptatibus expedita saepe officia optio, commodi totam ratione laudantium ipsum porro molestias, quasi nulla minus vitae laboriosam corrupti Delectus inventore explicabo est odit incidunt rem a recusandae eum pariatur. Aperiam doloremque blanditiis harum voluptate animi fugit beatae asperiores quo, dignissimos sed illum veniam eum accusantium nulla quod voluptatum',
        scores: [
          {
            date: '2023-02-08',
            score: 90
          },
          {
            date: '204-04-22',
            score: 92
          },
          {
            date: '2024-09-15',
            score: 87
          }
        ]
      };
  
    return (
      <div className="CreateLearner">
      <button onClick={() => addLearner(newLearner)}>Create Learner</button>
    </div>
    );
  }
  
  export default CreateLearner;