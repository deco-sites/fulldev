export interface Props {
  nivel: "Junior" | "Pleno" | "Senior";
}

export default function Progress({ nivel }: Props) {
  function getColorNivel(devNivel: string) {
    switch (devNivel) {
      case "Junior":
        return "bg-red-500";
      case "Pleno":
        return "bg-blue-500";
      case "Senior":
        return "bg-green-500";
      default:
        return "bg-green-500";
    }
  }

  function getTextColorNivel(devNivel: string) {
    switch (devNivel) {
      case "Junior":
        return "text-red-500";
      case "Pleno":
        return "text-blue-500";
      case "Senior":
        return "text-green-500";
      default:
        return "text-green-500";
    }
  }

  function getLengthNivel(devNivel: string) {
    switch (devNivel) {
      case "Junior":
        return "w-1";
      case "Pleno":
        return "w-24";
      case "Senior":
        return "w-48";
      default:
        return "w-48";
    }
  }

  return (
    <>
      <p
        class={`text-base font-semibold ${
          getTextColorNivel(nivel)
        } font-sans mb-2`}
      >
        Level: {nivel}
      </p>
      <div class="w-48 bg-slate-300 h-5 border border-slate-300 rounded">
        <div
          class={`${getLengthNivel(nivel)} h-full ${
            getColorNivel(nivel)
          } rounded-e`}
        >
        </div>
      </div>
    </>
  );
}
