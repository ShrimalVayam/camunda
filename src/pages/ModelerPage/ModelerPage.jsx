import { useEffect, useRef } from "react";
import BpmnViewer from "bpmn-js/lib/Modeler";
import "bpmn-js/dist/assets/diagram-js.css";
import "bpmn-font/dist/css/bpmn-embedded.css";
import propertiesPanelModule from "bpmn-js-properties-panel";
import propertiesProviderModule from "bpmn-js-properties-panel/lib/provider/camunda";
import "bpmn-js-properties-panel/dist/assets/bpmn-js-properties-panel.css";
import camundaModdleDescriptor from "camunda-bpmn-moddle/resources/camunda";

const BpmnView = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const viewer = new BpmnViewer({
      container: containerRef.current,
      keyboard: {
        bindTo: window
      },
      additionalModules: [propertiesPanelModule, propertiesProviderModule],
      moddleExtensions: {
        camunda: camundaModdleDescriptor
      }
    });

    function importXML(xml, viewer) {
      viewer.importXML(xml, function (err) {
        if (err) {
          return console.error("could not import BPMN 2.0 diagram", err);
        }
        const canvas = viewer.get("canvas");
        canvas.zoom("fit-viewport");
      });
    }

    fetch("/src/pages/ModelerPage/diagram.bpmn")
      .then(response => response.text())
      .then(diagramXML => {
        importXML(diagramXML, viewer);
      })
      .catch(error => console.error("Error fetching BPMN file:", error));

    return () => {
      viewer.destroy();
    };
  }, []);

  return (
    <>
      <div id="js-canvas" ref={containerRef} style={{ width: "100%", height: "100vh" }} />
    </>
  );
};

export default BpmnView;
