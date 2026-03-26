<script>
  import "@fortawesome/fontawesome-free/css/all.min.css";
  import { Masonry, Modal } from "@merlin-chatou/sutairu";
  import { searchState } from "./state/search.svelte.js";
  import "$lib/generated/sutairu.min.css";

  import Navbar from "./components/Navbar.svelte";

  import BackgroundColorCard from "./components/Cards/BackgroundColorCard.svelte";
  import BackgroundOpacityCard from "./components/Cards/BackgroundOpacityCard.svelte";
  import BackgroundShadeScaleCard from "./components/Cards/BackgroundColorShadeCard.svelte";
  import BlockquoteCard from "./components/Cards/BlockquoteCard.svelte";
  import BorderColorCard from "./components/Cards/BorderColorCard.svelte";
  import BorderColorShadeCard from "./components/Cards/BorderColorShadeCard.svelte";
  import BorderOpacityCard from "./components/Cards/BorderOpacityCard.svelte";
  import BorderRadiusCard from "./components/Cards/BorderRadiusCard.svelte";
  import BorderWidthCard from "./components/Cards/BorderWidthCard.svelte";
  import ButtonSemanticCard from "./components/Cards/ButtonSemanticCard.svelte";
  import ButtonColorCard from "./components/Cards/ButtonCard.svelte";
  import ButtonDisabledCard from "./components/Cards/ButtonDisabledCard.svelte";
  import CardWithHeaderCard from "./components/Cards/CardWithHeaderCard.svelte";
  import CardWithImageHeaderCard from "./components/Cards/CardWithImageHeaderCard.svelte";
  import CodeHighlightCard from "./components/Cards/CodeHighlightCard.svelte";
  import ColorSchemeCard from "./components/Cards/ColorSchemeCard.svelte";
  import CursorCard from "./components/Cards/CursorCard.svelte";
  import DottedCard from "./components/Cards/DottedCard.svelte";
  import ExtendedTypographyCard from "./components/Cards/ExtendedTypographyCard.svelte";
  import FilterCard from "./components/Cards/FilterCard.svelte";
  import FlexCard from "./components/Cards/FlexCard.svelte";
  import FontSizeCard from "./components/Cards/FontSizeCard.svelte";
  import FontWeightCard from "./components/Cards/FontWeightCard.svelte";
  import FormCard from "./components/Cards/FormCard.svelte";
  import HatchingCard from "./components/Cards/HatchingCard.svelte";
  import HeadingCard from "./components/Cards/HeadingCard.svelte";
  import InteractiveBackgroundCard from "./components/Cards/InteractiveBackgroundCard.svelte";
  import InteractiveTextCard from "./components/Cards/InteractiveTextCard.svelte";
  import LoaderCard from "./components/Cards/LoaderCard.svelte";
  import MarginCard from "./components/Cards/MarginCard.svelte";
  import ModalCard from "./components/Cards/ModalCard.svelte";
  import PaddingCard from "./components/Cards/PaddingCard.svelte";
  import PerSideBorderWidthCard from "./components/Cards/PerSideBorderWidthCard.svelte";
  import RotationCard from "./components/Cards/RotationCard.svelte";
  import ScaleCard from "./components/Cards/ScaleCard.svelte";
  import SemanticBackgroundCard from "./components/Cards/SemanticBackgroundCard.svelte";
  import SemanticColorsCard from "./components/Cards/SemanticColorCard.svelte";
  import StripesCard from "./components/Cards/StripesCard.svelte";
  import TableCard from "./components/Cards/TableCard.svelte";
  import TextAlignmentCard from "./components/Cards/TextAlignmentCard.svelte";
  import TextColorsCard from "./components/Cards/TextColorCard.svelte";
  import TextColorShadeCard from "./components/Cards/TextColorShadeCard.svelte";
  import TextOpacityCard from "./components/Cards/TextOpacityCard.svelte";
  import TypographyCard from "./components/Cards/TypographyCard.svelte";
  import UiAnimation from "./components/Cards/UiAnimation.svelte";
  import SizingCard from "./components/Cards/SizingCard.svelte";
  import WhiteSpaceCard from "./components/Cards/WhiteSpaceCard.svelte";

  import DocumentationModal from "./components/DocumentationModal.svelte";
  import NoSearchResult from "./components/NoSearchResult.svelte";

  import ModalBasicExample from "./components/DemoModals/ModalBasicExample.svelte";
  import ModalNoAnimation from "./components/DemoModals/ModalNoAnimation.svelte";
  import ModalNoBackdropBlur from "./components/DemoModals/ModalNoBacdropBlur.svelte";
  import ModalCentered from "./components/DemoModals/ModalCentered.svelte";
  import ModalLongContent from "./components/DemoModals/ModalLongContent.svelte";
  import ModalLongContentPageScroll from "./components/DemoModals/ModalLongContentPageScroll.svelte";
  import ModalToggle1 from "./components/DemoModals/ModalToggle1.svelte";
  import ModalToggle2 from "./components/DemoModals/ModalToggle2.svelte";
  import ModalFixWidth from "./components/DemoModals/Modal-fix-width.svelte";
  import ModalFullWidth from "./components/DemoModals/ModalFullWidth.svelte";

  // Initialize documentation version from URL
  import BrowserInit from "$lib/components/BrowserInit.svelte";
  import { onMount } from "svelte";

  let masonry = $state();

  onMount(() => {
    //Modal.init();
    Masonry.init(masonry, {
      targetWidth: 350,
      mode: "closest",
      gap: 10,
      onReflow: (params) => {
        const items = Array.from(params.container.children);
        items.forEach((item) => {
          item.classList.remove("opacity-0");
        });
      },
    });
    $effect(() => {
      const _ = searchState.queries;
      console.log("arrange");
      Masonry.arrange(masonry, {
        targetWidth: 350,
        mode: "closest",
        gap: 10,
        onReflow: (params) => {
          const items = Array.from(params.container.children);
          items.forEach((item) => {
            item.classList.remove("opacity-0");
          });
        },
      });
    });
  });
</script>

<BrowserInit />
<Navbar />

<div class="px-1 tg-glow bg-dotted fg-black dark:fg-white min-h-100vh">
  <div class="d-flex fd-row gap-2 as-center jc-center mt-0 mb-2 pt-3">
    <img src="/images/logo/logo-no-bg.svg" alt="Sutairu Logo" height="50" class="d-inline m-0 as-center bg-accent r-3" />
    <h1 class="h1 d-inline my-0">Sutairu</h1>
  </div>
  <p class="max-w-lg mx-auto text-center mb-4 md:mb-5">
    Lightweight, high-performance utility CSS framework designed to scan your project files and generate optimized, atomic styles in real-time.
  </p>

  <div bind:this={masonry} class="masonry px-2 pb-5">
    <ColorSchemeCard />
    <HeadingCard />
    <TypographyCard />
    <BlockquoteCard />
    <TableCard />
    <TextAlignmentCard />
    <FontSizeCard />
    <FontWeightCard />
    <WhiteSpaceCard />
    <ButtonSemanticCard />
    <ButtonColorCard />
    <ButtonDisabledCard />
    <FormCard />
    <TextColorsCard />
    <TextColorShadeCard />
    <TextOpacityCard />
    <SemanticColorsCard />
    <InteractiveTextCard />
    <MarginCard />
    <PaddingCard />
    <SizingCard />
    <SemanticBackgroundCard />
    <BackgroundColorCard />
    <BackgroundShadeScaleCard />
    <BackgroundOpacityCard />
    <InteractiveBackgroundCard />
    <BorderColorCard />
    <BorderColorShadeCard />
    <BorderOpacityCard />
    <BorderWidthCard />
    <BorderRadiusCard />
    <PerSideBorderWidthCard />
    <CursorCard />
    <FlexCard />
    <ExtendedTypographyCard />
    <CardWithHeaderCard />
    <CardWithImageHeaderCard />
    <ModalCard />
    <RotationCard />
    <ScaleCard />
    <CodeHighlightCard />
    <LoaderCard />
    <FilterCard />
    <HatchingCard />
    <DottedCard />
    <StripesCard />
    <UiAnimation />
  </div>

  <NoSearchResult />

  <DocumentationModal />
  <ModalBasicExample />
  <ModalNoAnimation />
  <ModalNoBackdropBlur />
  <ModalCentered />
  <ModalLongContent />
  <ModalLongContentPageScroll />
  <ModalToggle1 />
  <ModalToggle2 />
  <ModalFixWidth />
  <ModalFullWidth />
</div>

<style>
  :global(.masonry > *) {
    transition:
      transform 300ms ease,
      opacity 300ms ease 300ms;
  }
</style>
