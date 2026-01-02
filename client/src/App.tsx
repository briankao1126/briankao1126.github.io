import { Switch, Route } from "wouter";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";
import Videos from "@/components/Videos";
import Home from "@/pages/Home";
import DiaryList from "@/pages/DiaryList";
import DiaryDetail from "@/pages/DiaryDetail";
import NotFound from "@/pages/not-found";
import Notes from "@/pages/Notes";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/diaries" component={DiaryList} />
      <Route path="/notes" component={Notes} />
      <Route path="/diary/:slug" component={DiaryDetail} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <TooltipProvider>
      <div className="min-h-screen bg-background">
        <Navigation />
        <Router />
        <Videos />
        <Gallery />
        <Footer />
      </div>
      <Toaster />
    </TooltipProvider>
  );
}

export default App;
