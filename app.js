var a, f, ffd, ffe, fuerzaNeta, fx, g, inc, m, material, pesoy, ud, ue;
const planoS = document.getElementById("grados");

let checkp = document.getElementById("planoS");
let checkf = document.getElementById("friccionS");

masa = document.addEventListener("change", calcular);

function calcular() {
  m = (document.getElementById("masa")).value;
  m = parseFloat(m);
  f = (document.getElementById("fuerza")).value;
  f = parseFloat(f);

  fx = f;
pesoy = m * g;
    
}

g = 9.8;

function ps() {
  if (planoS == true) {
  
    grados.innerHTML = ` <h2>cuantos grados esta inclinado el plano?</h2>
    <input type="number" placeholder="ingresar inclinacion del plano" id="gradosS">  `
    console.log(planoS)
    
  };
  
}
function fs() {
  if (checkf == true) {
    
    
  }
  
};

if (prompt("El plano esta inclinado? (s/n) ")) {
  inc = Number.parseInt(input("Cuantos grados() esta inclinado el plano? "));  

  while (inc > 90 || inc < 0) {
    console.log("No es posible, ingrese otro valor ");
    inc = Number.parseInt(input("\u00bfCuantos grados(\u00b0) esta inclinado el plano? "));
  }

  fx = fx + m * g * math.sin(inc * math.pi / 180);
  pesoy = m * g * math.cos(inc * math.pi / 180);
}



if (prompt("Hay friccion? (s/n) ")) {
  material = input("¿Que materiales componen a los cuerpos?\na. Madera sobre madera\nb. Acero sobre hielo\nc. Teflón sobre teflón\nd. Caucho sobre cemento seco\ne. Vidrio sobre vidrio\nf. Esquí sobre nieve\ng. Madera sobre cuero\nh. Aluminio sobre acero\ni. Articulaciones humanas\nj. Personalizado\n");

  if (material === "a") {
    ue = 0.5;
    ud = 0.3;
  } else {
    if (material === "b") {
      ue = 0.03;
      ud = 0.02;
    } else {
      if (material === "c") {
        ue = 0.04;
        ud = 0.04;
      } else {
        if (material === "d") {
          ue = 1;
          ud = 0.8;
        } else {
          if (material === "e") {
            ue = 0.9;
            ud = 0.4;
          } else {
            if (material === "f") {
              ue = 0.1;
              ud = 0.05;
            } else {
              if (material === "g") {
                ue = 0.5;
                ud = 0.4;
              } else {
                if (material === "h") {
                  ue = 0.61;
                  ud = 0.47;
                } else {
                  if (material === "i") {
                    ue = 0.02;
                    ud = 0.003;
                  } else {
                    if (material === "j") {
                      ue = Number.parseFloat(input("Coeficiente de friccion estatico: "));
                      ud = Number.parseFloat(input("Coeficiente de friccion dinamico: "));
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }

  ffe = ue * pesoy;
  ffd = ud * pesoy;
  fuerzaNeta = fx - ffd;

  if (ffe > abs(fx)) {
    console.log("Fuerza Aplicada:", f, "Newton\nFuerza de Friccion Estatica:", ffe, "Newton\nEste objeto no se mueve porque la friccion entre los cuerpos es muy grande");
    exit();
  } else {
    a = fuerzaNeta / m;
  }
} else {
  a = fx / m;

  if (a === 0) {
    console.log("Este objeto no se mueve");
  }
}

console.log("El objeto tiene una aceleracion de", a, "m/s^2 (Valor positivo: movimiento -> Valor negativo: <-)");