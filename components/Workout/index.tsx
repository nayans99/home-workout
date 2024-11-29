"use client"

import { Item } from "@/model/Item";
import yogaWorkoutData from "../Category/YogaCategoryData";
import { useState } from 'react';
import { Button, Card, CardBody, CardHeader, Image } from "@nextui-org/react";

interface YogaItem {
  id: number;
  name: string;
  details: string;
  image: string;
  intro: string;
  steps: string[];
}

const WorkoutListComponent = ({workoutId}: {workoutId: string}) => {
    const workout = yogaWorkoutData.find(workout => workout.id === workoutId);
    console.log("workouit",workout, workoutId);

    const [currentWorkout, setCurrentWorkout] = useState(0);

  const handleNext = () => {
    if (!workout || !workout.items) return;
    setCurrentWorkout((prevIndex) =>
      prevIndex === workout.items.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    if (!workout || !workout.items) return;
    setCurrentWorkout((prevIndex) =>
      prevIndex === 0 ? workout.items.length - 1 : prevIndex - 1
    );
  };

  const [textToSpeak, setTextToSpeak] = useState('');

  const handleSpeak = () => {
    const utterance = new SpeechSynthesisUtterance(textToSpeak);
    utterance.lang = 'en-US'; // Set language
    window.speechSynthesis.speak(utterance);
  };

  const gatherTextToSpeak = () => {
    const intro = workout?.items[currentWorkout].intro || '';
    const steps = workout?.items[currentWorkout].steps.join('. ') || '';
    const details = workout?.items[currentWorkout].details || '';
    setTextToSpeak(`${intro} ${steps} ${details}`);
  };

  const handlePause = () => {
    window.speechSynthesis.pause();
  };

  // Resume speech
  const handleResume = () => {
    window.speechSynthesis.resume();
  };

  // Stop speech
  const handleStop = () => {
    window.speechSynthesis.cancel();
  };

    return (
      <div className="flex justify-center items-center h-screen relative">
      <Button onClick={handlePrev}>&#60;</Button>
      
      <Card className="py-4 mx-4"> {/* Use flex to arrange children horizontally */}
        
        
        <CardBody className="py-2 flex"> {/* Added flex-grow for text area */}

        <div className="flex justify-center items-start space-x-4 p-4">
          <div className="w-3/5">
            <h2 className="text-2xl font-semibold mb-2">{workout?.items[currentWorkout].name}</h2>
            <Image
              alt="Card background"
              className="object-cover rounded-xl h-auto"
              src={workout?.items[currentWorkout].image}
            />
          </div>

          <div>
          <h3 className="text-xl font-semibold mb-2">Introduction</h3>
            <p className="text-gray-600">
            {workout?.items[currentWorkout].intro} </p>
          <h3 className="text-xl font-semibold mb-2">Steps</h3>
          <ol>
            {workout?.items[currentWorkout].steps.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ol>
            <h3 className="text-xl font-semibold mb-2">Description</h3>
            <p className="text-gray-600">
            {workout?.items[currentWorkout].details} </p>
            <Button 
                onClick={() => {
                  gatherTextToSpeak(); // Gather text when the button is clicked
                  handleSpeak(); // Then speak the text
                }} 
                color="success"
                className="mt-4 bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 mx-2"
              >
                Play
              </Button>
              <Button 
                  onClick={handlePause} 
                  className="bg-yellow-500 text-white py-2 px-4 rounded hover:bg-yellow-600 mx-2"
                  color="warning"
                >
                  Pause
                </Button>

                <Button 
                  onClick={handleResume} 
                  className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 mx-2"
                  color="primary"
                >
                  Resume
                </Button>

                <Button 
                  onClick={handleStop} 
                  className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 mx-2"
                  color="danger"
                >
                  Stop
                </Button>
          </div>
        </div>
        </CardBody>
      </Card>
  
      <Button onClick={handleNext}>&#62;</Button>
    </div>
    )
} 

export default WorkoutListComponent;