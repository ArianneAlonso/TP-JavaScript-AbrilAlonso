let task = [];

function AgregarTarea() {
    let nuevaTarea = prompt("Ingrese una tarea");
    task.push(nuevaTarea);
    alert("nueva tarea: \n" + task.join("\n"));
}

function EditarTarea() {
    if (task.length) {
        let opciones = parseInt(prompt("Ingrese el número de la tarea que desea editar (1 a " + task.length + "): ")) - 1;
        if (opciones >= 0 && opciones < task.length) {
            task[opciones] = prompt("Ingrese la nueva descripción de la tarea:");
            alert("Tarea editada: \n" + task.join("\n"));
        } else {
            alert("no válido");
        }
    } else {
        alert("No hay tareas para editar");
    }
}

function EliminarTarea() {
    if (task.length) {
        let opciones = parseInt(prompt("Ingrese el número de la tarea que desea eliminar (1 a " + task.length + "): ")) - 1;
        if (opciones >= 0 && opciones < task.length) {
            task.splice(opciones, 1);
            alert("Tarea eliminada: \n" + (task.length ? task.join("\n") : "No hay tareas"));
        } else {
            alert("no válido");
        }
    } else {
        alert("No hay tareas para eliminar");
    }
}

while (true) {
    let opciones = parseInt(prompt("Ingrese el número de la acción a realizar \n 1 Agregar Tarea \n 2 Editar Tarea \n 3 Eliminar Tarea"));

    switch(opciones) {
        case 1:
            AgregarTarea();
            break;
        case 2:
            EditarTarea();
            break;
        case 3:
            EliminarTarea();
            break;
        default:
            alert("Opción no válida");
    }
}
while (true) {
  let opcionIngresada = prompt("Ingrese el número de la acción a realizar \n 1 Agregar Tarea \n 2 Editar Tarea \n 3 Eliminar Tarea");

  if (isNaN(opcionIngresada) || opcionIngresada === "") {
    alert("Entrada no válida. Ingrese un número entre 1 y 3.");
    continue;
  }
}