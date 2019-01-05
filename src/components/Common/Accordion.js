import React, { Component } from "react";
import AccordionContent from "./AccordionContent";

class Accordion extends Component {
  state = {
    expandedSections: {},
    isInititalExpanded: false
  };

  onAccordionToggle = index => {
    const { expandedSections, isInititalExpanded } = this.state;

    const isOpen = !!expandedSections[index];

    this.setState(
      {
        expandedSections: {
          [index]: !isOpen
        }
      },
      () => {
        if (index === 1 && isInititalExpanded) {
          this.setState(state => ({
            isInititalExpanded: !state.isInititalExpanded,
            expandedSections: {
              [index]: isOpen
            }
          }));
        }
      }
    );
  };

  render() {
    const { expandedSections, isInititalExpanded } = this.state;

    return (
      <div className="accordion">
        <AccordionContent
          isExpanded={index => !!expandedSections[index] || isInititalExpanded}
          headerTitle={"Accordion 1"}
          index={1}
          onAccordionToggle={this.onAccordionToggle}
        >
          Sed non urna. Donec et ante. Phasellus eu ligula. Vestibulum sit amet
          purus. Vivamus hendrerit, dolor at aliquet laoreet, mauris turpis
          porttito
        </AccordionContent>
        <AccordionContent
          isExpanded={index => !!expandedSections[index]}
          headerTitle={"Accordion 2"}
          index={2}
          onAccordionToggle={this.onAccordionToggle}
        >
          Sed non urna. Donec et ante. Phasellus eu ligula. Vestibulum sit amet
          purus. Vivamus hendrerit, dolor at aliquet laoreet, mauris turpis
          porttito
        </AccordionContent>
        <AccordionContent
          isExpanded={index => !!expandedSections[index]}
          headerTitle={"Accordion 3"}
          index={3}
          onAccordionToggle={this.onAccordionToggle}
        >
          Sed non urna. Donec et ante. Phasellus eu ligula. Vestibulum sit amet
          purus. Vivamus hendrerit, dolor at aliquet laoreet, mauris turpis
          porttito
        </AccordionContent>
      </div>
    );
  }
}

export default Accordion;
