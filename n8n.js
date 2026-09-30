async function addChecklistTask(taskName, dueDate) {
  // Replace with your actual n8n Production Webhook URL
  const webhookUrl = 'https://ndb1.api.fpctools.com/webhook/add-task';

  try {
    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        task_name: taskName,
        due_date: dueDate
      })
    });

    const result = await response.json();
    
    if (result.status === 'success') {
      console.log('Success:', result.message);
      // Add any UI updates here (e.g., clearing the form, showing a success toast)
    }
  } catch (error) {
    console.error('Error adding task:', error);
  }
}

