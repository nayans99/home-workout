import WorkoutListComponent from "@/components/Workout";



export default function Workout({ params }: { params: { workoutId: string } }) {
  console.log("slog", params.workoutId);
    return (
      <div>
        <WorkoutListComponent workoutId={params.workoutId} />
      </div>
    );
  } 